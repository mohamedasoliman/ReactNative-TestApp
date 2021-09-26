// react
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

// helper
import { getDataFromGivenUrl } from '../util/Axios'

// main component
export default function Home({ navigation }) {

    // states & variables
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState('');

    // life cycle
    useEffect(() => {

        setLoading(true)

        let dataObj = {
            url: 'http://jsonplaceholder.typicode.com/users',
            callBack: getDataSuccess
        }

        getDataFromGivenUrl(dataObj)

    }, []);

    // call back when get data or get error
    const getDataSuccess = (data) => {

        setUserList(data.payload)
        setLoading(false)
    }

    // on user click action
    const handleClick = (user) => {

        navigation.navigate('User\'s Albums', { user: user })
    }

    // helper view

    const renderUser = ({ item }) => {

        return (
            <TouchableOpacity
                onPress={() => handleClick(item)}
                style={styles.userContainer}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#fa2a55' }}>{item.name}</Text>
                <Text style={{ fontSize: 18, color: '#696969', marginBottom: 5 }}>{item.username}</Text>
                <Text style={{ fontSize: 16, marginBottom: 5, color: 'blue' }}>{item.email}</Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>{item.phone}</Text>
                <Text style={{ fontSize: 16, color: 'blue' }}>{item.website}</Text>
            </TouchableOpacity>
        )
    }

    // render view

    // loading
    if (loading) {

        return (
            <View
                style={styles.loadingContainer}>
                < ActivityIndicator />
            </View>
        )
    }

    // error
    if (error) {

        return (
            <Text>error</Text>
        )
    }

    // render
    return (
        <View style={styles.container}>
            <FlatList data={userList}
                renderItem={renderUser}
                keyExtractor={item => item.id.toString()} />

        </View>
    );
}

// style

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userContainer: {
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    userImage: {
        height: 44,
        width: 44,
    }


});
