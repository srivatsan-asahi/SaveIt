import * as React from 'react';
import { Button, Text, View, Modal, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { INCREASE_COUNTER } from '../redux/action';
import { FAB } from 'react-native-elements';
const HomeScreen = (props) => {
    const { counter, increaseCount } = props;
    const [visible, setVisible] = React.useState(true);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{counter}</Text>
            <View style={styles.fabStyle}>
                <FAB
                    onPress={() => increaseCount()}
                    icon={{ name: 'add', color: 'white' }}
                    color="black"
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    fabStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
    }

});

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