import { Text, View, TouchableOpacity, FlatList} from 'react-native'

import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import styles from './styles'
import categories from '../../assets/data/categories';
import HomeCategory from '../HomeCategory';
import { StatusBar } from 'expo-status-bar';

function HomeScreen (){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
          <Entypo name="menu" size={24} color="white" style={styles.icons}/>
          </TouchableOpacity>
         <Text style={styles.homeText}>HOME</Text>
        <TouchableOpacity>
        <AntDesign name="search1" size={24} color="white"  style={styles.icons}/>
        </TouchableOpacity>
       <TouchableOpacity>
       <Feather name="more-vertical" size={24} color="white"  style={styles.icons}/>
       </TouchableOpacity>
        
        </View>
        <FlatList
      data= {categories.items}
      renderItem= {({item})=><HomeCategory category={item}/>}
      
      />
      <StatusBar style="auto" />
      </View>
    )
  }


export default HomeScreen