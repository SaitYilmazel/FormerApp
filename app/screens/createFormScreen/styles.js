// Imports

// Libraries
import {StyleSheet} from 'react-native';

//
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  addButton: {
    position: 'absolute',
    right: 14,
    bottom: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#448AFF',
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 99999,
    zIndex: 99999
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  firstQuestionView: {
    width: '100%',
    backgroundColor: '#BDBDBD',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#757575',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    marginBottom: 12,
  },
  firstQuestionText: {
    color: '#757575',
    fontSize: 24,
    fontWeight: '700',
  },
  formTitle: {
    fontSize: 24,
    color: '#757575',
    fontWeight: '700',
  },
  modal: {
    backgroundColor: '#3F51B5',
    flex: 1,
  },
  modalContainerStyle: {
    paddingVertical: 0,
    paddingHorizontal: 14,
  },
  modalItem: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#303F9F',
  },
  modalText: {
    fontSize: 18,
    color: '#C5CAE9',
  },
  modalBadge: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#C5CAE9',
    borderRadius: 4,
    position: 'absolute',
    right: 0,
  },
  modalBadgText: {
    color: '#3F51B5',
    fontSize: 10,
  },
  modalCloseButton: {
    position: 'absolute',
    right: 14,
    bottom: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#448AFF',
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  modalCloseButtonText: {
    color: '#ffffff',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  sendButton: {
    backgroundColor: '#448AFF',
    height: 50,
    borderRadius: 8,
    maxWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
