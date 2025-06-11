import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

const ScreenWrapper = ({style, children}: ScreenWrapperProps) => {
  const theme = useTheme();
  const {height} = Dimensions.get('window');
  let paddingTop = Platform.OS === 'ios' ? height * 0.08 : 0;
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background, paddingTop }, style]}>
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  }
});