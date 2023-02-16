import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export const routeNameRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function reset(name) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.reset({
      index: 0,
      routes: [{name: name}],
    });
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
