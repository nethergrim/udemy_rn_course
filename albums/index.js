import React from 'react';
import { AppRegistry, View, StatusBar, SafeAreaView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F1DEDE' }}>

            <StatusBar translucent={true} backgroundColor='#FE938C' />
            

                <Header headerText={'Albums'} />
                <AlbumList />

            

        </View>

    );
};

AppRegistry.registerComponent('albums', () => App);        