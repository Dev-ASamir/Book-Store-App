import React from 'react';
import {TouchableOpacity, ActivityIndicator, View} from 'react-native';
import {AppText, Input, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {normalizeWidth} from '../../utils';
import {validationSchema} from './validationSchema';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {saveUserProfile} from '../../redux/actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../common';
import {userSignUp} from '../../services';

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleConfirm = async (values) => {
    setLoading(true);
    const {name, email, password} = values;
    const res = await userSignUp({
      name,
      email,
      password,
    });
    if (res.data) {
      setLoading(false);
      dispatch(saveUserProfile({userProfile: res.data}));
      navigation.navigate('Auth', {screen: 'Home'});
    } else {
      setLoading(false);
      ('Error please try again');
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleConfirm(values)}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
        }) => (
          <View style={{marginHorizontal: normalizeWidth(38)}}>
            <AppText style={styles.createAcc}>{'Create Account'}</AppText>
            <AppText style={styles.nameTxt}>{'Name'}</AppText>
            <Input
              textInputStyle={styles.txtInput}
              placeholderTextColor={'rgba(119, 119, 119, 1)'}
              style={styles.inputStyle}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
            {touched.name && errors.name && (
              <AppText style={{color: 'red'}}>{errors.name}</AppText>
            )}
            <View>
              <AppText style={styles.nameTxt}>{'Email'}</AppText>

              <Input
                textInputStyle={styles.txtInput}
                placeholderTextColor={'rgba(119, 119, 119, 1)'}
                style={styles.inputStyle}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
            </View>
            {touched.email && errors.email && (
              <AppText style={{color: 'red'}}>{errors.email}</AppText>
            )}
            <View>
              <AppText style={styles.nameTxt}>{'Password'}</AppText>

              <Input
                secureTextEntry={true}
                textInputStyle={styles.txtInput}
                placeholderTextColor={'rgba(119, 119, 119, 1)'}
                style={styles.inputStyle}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
            </View>
            {touched.password && errors.password && (
              <AppText style={{color: 'red'}}>{errors.password}</AppText>
            )}

            {loading ? (
              <ActivityIndicator
                color={'#000'}
                style={[styles.buttonView, {borderWidth: 0}]}
              />
            ) : (
              <Button
                onPress={() => handleSubmit()}
                children={'Sign Up'}
                textStyle={styles.priceText2}
                style={[styles.buttonView, {backgroundColor: COLORS.black}]}
              />
            )}
            <View style={styles.foundAcc}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <AppText style={styles.nameTxt3}>{'Sign In'}</AppText>
              </TouchableOpacity>
              <AppText style={styles.nameTxt2}>
                {'Already Have Account'}
              </AppText>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
