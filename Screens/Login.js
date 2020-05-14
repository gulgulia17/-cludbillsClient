import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, Alert } from 'react-native'
import { WebView } from 'react-native-webview'
export default class Login extends Component {
    ActivityIndicatorLoadingView() {
        return (
            <ActivityIndicator
                color="#009688"
                size="large"
                style={styles.indicator}
            />
        );
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    renderLoading={this.ActivityIndicatorLoadingView}
                    startInLoadingState={true}
                    source={{ uri: 'https://cloudbills.in/client_login' }}
                    textZoom={100}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        top: '50%',
        left: '45%',
    }
});
