import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import {
  Box,
  Button,
  Heading,
  ResponsiveContext,
  Tabs,
  Tab,
  Text,
} from 'grommet';
import { FormNextLink } from 'grommet-icons';
import FlightInfo from './FlightInfo';

const Flights = () => {
  const {
    depart,
    arrive,
    distance,
    time,
    flightClass,
    setFlightClass,
    price,
  } = useContext(Context);
  const size = useContext(ResponsiveContext);
  const [tab, setTab] = useState(0);

  const setClass = (tab) => {
    if (tab === 0) {
      setFlightClass('Economy');
    } else {
      setFlightClass('Premium');
    }
  };

  useEffect(() => {
    if (flightClass === 'Economy') {
      setTab(0);
    } else {
      setTab(1);
    }
  }, [flightClass]);

  return (
    <>
      {size !== 'small' ? (
        <>
          <Box
            direction="row"
            justify="between"
            align="center"
            width="65rem"
            margin={{ horizontal: 'auto' }}
            border={{ size: 'small', side: 'bottom' }}>
            <Box direction="row" align="center">
              <Heading margin="xsmall" level={3} color={'text-strong'}>
                Depart:
              </Heading>
              <Heading margin="xsmall" level={3} color={'text-strong'}>
                {depart}
              </Heading>
              <FormNextLink size="large" />
              <Heading margin="xsmall" level={3} color={'text-strong'}>
                {arrive}
              </Heading>
            </Box>
            <Box
              elevation="medium"
              margin={{
                horizontal: 'medium',
              }}>
              <Link to="/">
                <Button primary label="Modify Voyage" />
              </Link>
            </Box>
          </Box>
          <Tabs
            alignControls="center"
            width="60rem"
            margin={{ horizontal: 'auto', vertical: 'small' }}
            onActive={(tab) => setClass(tab)}
            activeIndex={tab}>
            <Tab title="Economy Class" focusIndicator={false}>
              <FlightInfo
                flight={{
                  speed: '25,000 km/h',
                  travelTime: `${time} Days`,
                  distance: `${distance} Mil. km`,
                  price: `$${price.Economy}`,
                }}
              />
            </Tab>
            <Tab title="Premium Class" focusIndicator={false}>
              <FlightInfo
                flight={{
                  speed: '25,000 km/h',
                  travelTime: `${time} Days`,
                  distance: `${distance} Mil. km`,
                  price: `$${price.Premium}`,
                }}
              />
            </Tab>
          </Tabs>
          <Link to="/low-fares" style={{ textDecoration: 'none' }}>
            <Box
              className="button_hover"
              direction="row"
              justify="center"
              align="center"
              width="60rem"
              margin={{ horizontal: 'auto' }}
              background="accent"
              round="xsmall">
              <Heading textAlign="center" level={3}>
                Are Your Dates Flexible? Browse Our Lowest Fares!
              </Heading>
            </Box>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Box
              className="button_hover"
              direction="row"
              justify="center"
              align="center"
              round="xsmall"
              width="50rem"
              margin={{ horizontal: 'auto', top: '5rem' }}
              background="accent">
              <Text
                textAlign="center"
                size="medium"
                margin={{ vertical: 'small' }}>
                To learn about how the distances and travel times are estimated,
                click here!
              </Text>
            </Box>
          </Link>
        </>
      ) : (
        <>
          <Box
            direction="row"
            justify="evenly"
            align="center"
            border={{ size: 'xsmall', side: 'bottom' }}>
            <Box direction="row" align="center" margin="xsmall">
              <Text weight="bold" size="large" textAlign="center">
                {depart} > {arrive}
              </Text>
            </Box>
            <Box elevation="medium" margin="xsmall">
              <Link to="/">
                <Button primary label="Modify" />
              </Link>
            </Box>
          </Box>
          <Tabs
            alignControls="center"
            margin="small"
            onActive={(tab) => setClass(tab)}
            activeIndex={tab}>
            <Tab title="Economy Class" focusIndicator={false}>
              <FlightInfo
                flight={{
                  speed: '25,000 km/h',
                  travelTime: `${time} Days`,
                  distance: `${distance} Mil. km`,
                  price: `$${price.Economy}`,
                }}
              />
            </Tab>
            <Tab title="Premium Class" focusIndicator={false}>
              <FlightInfo
                flight={{
                  speed: '25,000 km/h',
                  travelTime: `${time} Days`,
                  distance: `${distance} Mil. km`,
                  price: `$${price.Premium}`,
                }}
              />
            </Tab>
          </Tabs>
          <Link
            to="/low-fares"
            style={{ textDecoration: 'none' }}
            className="button_hover">
            <Box
              className="button_hover"
              direction="column"
              justify="center"
              elevation="medium"
              margin="medium"
              align="center"
              background="accent"
              round="xsmall">
              <Text textAlign="center" size="medium" className="button_hover">
                Are Your Dates Flexible?
              </Text>
              <Text textAlign="center" size="medium" className="button_hover">
                Browse Our Lowest Fares!
              </Text>
            </Box>
          </Link>
        </>
      )}
    </>
  );
};

export default Flights;
