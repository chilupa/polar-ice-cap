import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Grow,
  Link,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

const GridItem = ({ children, md }) => (
  <Grid item md={md ? md : 6} xs={12}>
    {children}
  </Grid>
);

const Title = ({ children, ...props }) => (
  <Box pt={2} pb={2}>
    <Typography variant="h6" component="h1" color="primary">
      {children}
    </Typography>
  </Box>
);

const Section = ({ children }) => (
  <Typography variant="body1">{children}</Typography>
);

const Home = () => {
  const [polarCapData, setPolarCapData] = useState([]);
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();
  const polarCapOptions = {
    method: 'GET',
    url: `https://${process.env.REACT_APP_API_POLAR_CAP_HOST}/api/arctic-api`,
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': process.env.REACT_APP_API_POLAR_CAP_HOST,
    },
    cancelToken: source.token,
  };

  useEffect(() => {
    setLoading(true);
    const getPolarCapData = async () =>
      await axios
        .request(polarCapOptions)
        .then((response) => {
          setLoading(false);
          setPolarCapData(response.data.result);
        })
        .catch((error) => {
          setLoading(false);
          if (axios.isCancel(error)) {
          } else {
            throw error;
          }
        });
    getPolarCapData();
    return () => {
      source.cancel();
    };
  }, []);

  const polarCapExtent = polarCapData.map(({ extent }) => extent);
  const polarCapDataYears = polarCapData.map(({ year }) => year);

  const chartConfig = {
    legend: {
      draggable: true,
    },
    scaleY: {
      label: { text: 'Extent (millions of square kilometers)' },
    },
  };

  const lineConfig = {
    type: 'line',
    plot: {
      marker: {
        'background-color': 'red',
        size: 2,
        'border-color': 'red',
        'border-width': 1,
      },
    },
    scaleX: {
      label: { text: 'Years' },
      labels: polarCapDataYears,
    },
    series: [{ text: 'Extent', values: polarCapExtent }],
    ...chartConfig,
  };

  const barConfig = {
    type: 'bar',
    scaleX: {
      label: { text: 'Years' },
      labels: polarCapDataYears,
    },
    series: [{ text: 'Extent', values: polarCapExtent }],
    ...chartConfig,
  };

  return (
    <Box>
      <Grow in={true} {...{ timeout: 1000 }}>
        <Box pt={2} pb={2}>
          <Title>North Polar ice cap melting</Title>
          <Section>
            According to the{' '}
            <Link
              href="http://nsidc.org/arcticseaicenews/"
              target="_blank"
              rel="noopener"
              color="secondary">
              National Snow and Ice Data Center
            </Link>
            , "since 1979, winter Arctic ice extent has decreased about 4.2
            percent per decade". Both 2008 and 2009 had a minimum Arctic sea ice
            extent somewhat above that of 2007. At other times of the year the
            ice extent is still sometimes near the 1979–2000 average, as in
            April 2010, by the data from the National Snow and Ice Data Center.
            Still, between these same years, the overall average ice coverage
            appears to have declined from 8 million million square kilometers to
            5 million square kilometers.
          </Section>
          <Title>Polar Ice Cap</Title>
          <Section>
            A polar ice cap or polar cap is a high-latitude region of a planet,
            dwarf planet, or natural satellite that is covered in ice. Polar ice
            caps form because high-latitude regions receive less energy in the
            form of solar radiation from the Sun than equatorial regions,
            resulting in lower surface temperatures.
          </Section>
          <Box pt={2}>
            <Section>
              Below are two graphs which depicts the Polar ice cap extent with
              respect to years from 1979 to 2019.
            </Section>
          </Box>
        </Box>
      </Grow>
      <Grid container alignItems="center">
        <GridItem>
          <Title>Line Chart</Title>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <ZingChart data={lineConfig} />
          )}
        </GridItem>
        <GridItem>
          <Title>Bar Chart</Title>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <ZingChart data={barConfig} />
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
