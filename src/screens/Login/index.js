import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {AppText, Input, Button} from '../../components';
import styles from './styles';
import {normalizeWidth} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {validationSchema} from './validationSchema';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../common';
import {userLogin} from '../../services';
import {saveUserProfile} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const handleConfirm = async (values) => {
    setLoading(true);
    const {email, password} = values;
    const res = await userLogin({
      email,
      password,
    });
    if (res) {
      setLoading(false);
      dispatch(saveUserProfile({userProfile: res.data}));
      navigation.navigate('Auth', {screen: 'Home'});
    } else {
      setLoading(false)('Error please try again');
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Formik
        initialValues={{
          email: '',
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
            <AppText style={styles.createAcc}>{'Login'}</AppText>
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
                children={'Login'}
                textStyle={styles.priceText2}
                style={[styles.buttonView, {backgroundColor: COLORS.black}]}
              />
            )}
            <View style={styles.forgetAcc}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <AppText style={styles.nameTxt3}>
                  {''}
                  {'Signup'}
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.nameTxt2}>{"Don't have account,"}</AppText>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Login;
