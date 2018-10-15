import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text style={styles.textStyle} >{artist}</Text>
                </View>

            </CardSection>
            <CardSection>

                <Image source={{ uri: image }} style={styles.imageStyle}></Image>

            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} > Buy Now</Button>
            </CardSection>
        </Card>

    );
};

const styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    headerTextStyle: {
        fontSize: 18,
        color: '#000'
    },
    textStyle: {
        color: '#000',
        fontSize: 14
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        resizeMode: 'center',
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};


export default AlbumDetail;