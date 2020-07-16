import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
];
const centerImgData = Math.floor(imgData.length / 2);
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.7, flexDirection: "row"}}>
          <View style={{
            flex: 1, 
            backgroundColor: "white",
            justifyContent: "center",
            marginLeft: 20
            }}>
            <Ionicons name="ios-arrow-round-back" size={40} color="black" />  
          </View>
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            marginRight: 20
            }}>
          <EvilIcons name="navicon" size={40} color="black" />
          </View>
      </View>
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Image 
            style={styles.imgAvatar}
            source={require("./assets/avata.jpg")}  
          >
          </Image>
        </View>
        <View style={styles.userDetail}>
          <View style={styles.name}>
            <Text style={styles.txtName}>Trinh Minh Vu</Text>
          </View>
          <View style={styles.job}>
            <Text style={styles.txtJob}>Cave duc</Text>
          </View>
          <View style={styles.inforButton}>
            <View style={styles.btnFollow}>
              <Text style={{color: "white"}}>Follow</Text>
            </View>
            <View style={styles.btnSend}>
            <MaterialIcons name="send" size={25} color="white" />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1.2, flexDirection:"row"}}>
        <View style={styles.photos}>
          <Text style={styles.numPhotos}>123</Text>
          <Text style={styles.txtPhotos}>Photos</Text>
        </View>
        <View style={styles.followers}>
          <Text style={styles.numFollowers}>69k</Text>
          <Text style={styles.txtFollowers}>Followers</Text>
        </View>
        <View style={styles.following}>
          <Text style={styles.numFollowing}>96</Text>
          <Text style={styles.txtFollowing}>Following</Text>
        </View>
      </View>
      <View style={styles.userImages}>
        <ScrollView contentContainerStyle={{flexDirection:"row", justifyContent: "center", alignItems: "center"}}>
        <View style={{flex: 1, flexDirection: "column"}}>
          {
            imgData.slice(0, centerImgData).map((img, index) => {
              return <Image key={img.id} source={img.imgSource} style={styles.image}/>
            })
          }
        </View>
        <View style={{flex: 1, flexDirection: "column"}}>
          {
            imgData.slice(centerImgData).map((img, index) => {
              return <Image key={img.id} source={img.imgSource} style={styles.image}/>
            })
          }
        </View>
        </ScrollView>
      </View>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
          <View style={styles.icon1}>
            <AntDesign name="switcher" size={30} color="black" />
          </View>
          <View style={styles.icon2}>
            <MaterialIcons name="add-circle-outline" size={30} color="black" />
          </View>
          <View style={styles.icon3}>
            <Feather name="user" size={30} color="black" />
          </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  info: {
    flex: 2.5, 
    flexDirection: "row"
  },
  avatar: {
    flex: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  userDetail: {flex: 3},
  imgAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  name: {
    flex: 1,
  },
  txtName: {
    fontSize: 21,
    fontWeight: "bold"
  },
  txtJob: {
    fontSize: 15,
    color: "gray"
  },
  job: {
    flex: 1,
  },
  inforButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  btnFollow: {
    width: 140,
    height: 40,
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  btnSend: {
    width: 60,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SEND_MESSAGE_COLOR
  },
  photos: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  numPhotos: {
    fontSize: 22,
    fontWeight:"bold",
  },
  txtPhotos: {
    fontSize: 15,
    color: "gray"
  },
  followers: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  numFollowers: {
    fontSize: 22,
    fontWeight:"bold",
  },
  txtFollowers: {
    fontSize: 15,
    color: "gray"
  },
  following: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  numFollowing: {
    fontSize: 22,
    fontWeight:"bold",
  },
  txtFollowing: {
    fontSize: 15,
    color: "gray"
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 25,
    margin: 10
  },
  userImages: {
    flex: 6, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    flex: 2,
    marginLeft: 80,
  },
  icon2: {
    flex: 1,
  },
  icon3: {
    flex: 2,
    marginLeft: 60,
  },
});
