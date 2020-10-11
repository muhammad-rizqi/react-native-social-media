import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#16161a',
  },
  row: {
    flexDirection: 'row',
  },
  companyImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  form: {
    width: 325,
  },
  title: {
    color: '#7b7d8a',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#282c3b',
    paddingHorizontal: 8,
    backgroundColor: '#262a35',
    marginVertical: 8,
  },
  inputText: {
    color: 'white',
  },
  textWhite: {
    color: '#7b7d8a',
  },
  button: {
    backgroundColor: '#008efd',
    height: 48,
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#eeeeee',
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },

  pageContainer: {
    padding: 8,
    width: 350,
  },
  card: {
    backgroundColor: '#212227',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#25262b',
    marginVertical: 4,
  },
  headerBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#25262b',
    backgroundColor: '#212227',
    height: 43,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 4,
    tintColor: '#bbbdba',
  },
  input: {
    flex: 1,
    color: '#7b7d8a',
    paddingVertical: 0,
    marginLeft: 8,
  },
  statusCommand: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#25262b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  buttonSend: {
    backgroundColor: '#008efd',
    padding: 8,
    borderRadius: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    tintColor: '#bbbdba',
  },
  statusName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8b8d9a',
  },
  statusButtonGroup: {
    borderTopWidth: 1,
    borderTopColor: '#25262b',
    marginTop: 8,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
