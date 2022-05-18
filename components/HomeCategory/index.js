import { Text, View, FlatList,Image,Pressable } from 'react-native'
import movie from '../../assets/data/movie';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



const HomeCategory = (props) => {
    const { category } = props;

    const navigation =useNavigation ();
    const onMoviePress = (movie) => {
        navigation.navigate( 'Movie Details', { id: movie.id, })
    }
    return (
        <View style={styles.container}>
        
            <Text style={styles.title}>{category.title}</Text>
            <FlatList 
                data={category.movies}
                renderItem={({item}) => (
                    <Pressable onPress={() =>
                        onMoviePress(item)}>
                        <Image style={styles.image} source={{ uri: item.poster }} />
                        </Pressable>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

    )
  }


export default HomeCategory