/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../../core/models/cast.models';

interface Props {
  actor: Cast;
}

const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}
      />
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastActor;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 20,
  },
});
