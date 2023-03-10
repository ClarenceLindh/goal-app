import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#017779" }} // for Android
                onPress={props.onDeleteItem}
                style={({ pressed }) => [
                    // for iOs
                    {
                        backgroundColor: pressed
                            ? styles.buttonPressed
                            : styles.buttonNotPressed,
                    },
                ]}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: "#a4dbf5",
        borderRadius: 5,
    },
    goalText: {
        fontSize: 14,
        padding: 8,
        color: "#000000",
    },
    buttonPressed: {
        backgroundColor: "#54cfd1",
    },
    buttonNotPressed: {
        backgroundColor: "#1b96cf",
    },
});
