import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.taskLabel}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    square: {
        borderRadius: '5px',
        backgroundColor: '#acc3ff',
        width: '30px',
        height: '30px',
        margin: '10px'
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        borderWidth: '3px',
        width: '20px',
        height: '20px',
        borderColor: "#2F69FF",
        borderRadius: '50%',
        alignSelf: 'center',
        float: 'right'
    },
});

export default Task;