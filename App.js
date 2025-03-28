import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { saveFeedback } from '../firebaseConfig'; 

export default function App() {
  const title = 'Save';
  const [rating, setRating] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [comments, setComments] = useState('');

  const handleStarPress = (index) => {
    setRating(index + 1);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleSaveFeedback = async () => {
    if (rating && selectedOption) {
      try {
        await saveFeedback(rating, selectedOption, comments);
        setRating(0);
        setSelectedOption(null);
        setComments('');
        Alert.alert('Success', 'Feedback submitted successfully!');
      } catch (error) {
        Alert.alert('Error', 'Failed to submit feedback.');
      }
    } else {
      Alert.alert('Error', 'Please provide a rating and select an option.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate your experience</Text>
      <Text style={styles.smallText}>Are you satisfied with the app?</Text>
      <View style={{ flexDirection: 'row' }}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
            <MaterialCommunityIcons
              name="star"
              size={30}
              color={index < rating ? '#a4133c' : '#001427'}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.smallText}>Tell us what we can improve :</Text>
      <View style={styles.wrap}>
        {['More Features', 'Fix Bugs', 'UI Design', 'Integrate External Services'].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleOptionPress(option)}
            style={[styles.select, { backgroundColor: selectedOption === option ? '#a4133c' : '#001427' }]}>
            <Text style={{ color: 'white' }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        placeholder="Tell us how we can improve..."
        textAlignVertical="top"
        multiline={true}
        value={comments}
        onChangeText={setComments}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveFeedback}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  wrap: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    marginBottom: 20 
  },
  select: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  input: {
    padding: 15,
    height: 200,
    width: 300,
    borderRadius: 10,
    borderColor: '#001427',
    borderWidth: 1,
  },
  header: {
    fontSize: 24, 
    marginBottom: 10 
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  smallText: {
    fontSize: 18, 
    marginTop: 25
  },
  button: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#a4133c',
  }
});
