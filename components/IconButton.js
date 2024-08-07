import { Pressable, StyleSheet, Text } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import PropTypes from 'prop-types'

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
})
