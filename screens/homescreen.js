import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { INCREASE_COUNTER } from '../redux/action';

const HomeScreen = (props) => {
    const { counter, increaseCount } = props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Text>{counter}</Text>
            <Button
                onPress={() => increaseCount()}
                title="Increase"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

const mapStateToProps = state => {
    console.log(state.CounterReducer.count)
    return {
        counter: state.CounterReducer.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCount: () => dispatch({ type: INCREASE_COUNTER })
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);