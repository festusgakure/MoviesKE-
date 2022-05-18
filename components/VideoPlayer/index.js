import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { Video } from 'expo-av';

const VideoPlayer = () => {
    const video = React.useRef(null);
 
  const [status, setStatus] = React.useState({});
 
  return (
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={setStatus}
    />
  </View>
);
}

const styles = StyleSheet.create({
container: {
    width:"100%",
  height:"40%"
  

},
video: {
    marginTop:20,
  flex: 1,
  alignSelf: 'stretch'
}

});


export default VideoPlayer