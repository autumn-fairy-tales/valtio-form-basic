import { StyleSheet } from 'react-native';

export const formItemStyles = StyleSheet.create({
  'fairys-valtio-form-item': {
    padding: 4,
    fontSize: 12,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  'fairys-valtio-form-item.border-bottom': {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d1d5db',
  },
  'fairys-valtio-form-item.border-bottom.red': {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'red',
  },
  'fairys-valtio-form-item-container': {
    flex: 1,
    height: '100%',
    display: 'flex',
  },
  'fairys-valtio-form-item-container.between': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  'fairys-valtio-form-item-container.top': {
    flexDirection: 'column',
    gap: 4,
  },
  'fairys-valtio-form-item-container.left': {
    flexDirection: 'row',
    gap: 8,
  },
  'fairys-valtio-form-item-label': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  'fairys-valtio-form-item-label.left': {
    justifyContent: 'flex-end',
  },
  'fairys-valtio-form-item-label.required': {
    color: 'red',
    marginEnd: 4,
  },
  'fairys-valtio-form-item-label.show-colon': {
    textAlign: 'center',
    marginHorizontal: 2,
    fontSize: 12,
  },
  'fairys-valtio-form-item-label.show-colon.red': {
    color: 'red',
  },
  'fairys-valtio-form-item-label-text': {
    fontSize: 12,
    color: '#1f2937',
  },
  'fairys-valtio-form-item-label-text.red': {
    color: 'red',
  },
  'fairys-valtio-form-item-body': {
    position: 'relative',
    flex: 1,
    display: 'flex',
  },
  'fairys-valtio-form-item-body.left': {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  'fairys-valtio-form-item-body.top': {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  'fairys-valtio-form-item-body.between': {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  'fairys-valtio-form-item-body.border-bottom': {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d1d5db',
  },
  'fairys-valtio-form-item-body.border-bottom.red': {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'red',
  },
  'fairys-valtio-form-item-body-input': {
    minHeight: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  'fairys-valtio-form-item-body-input.between': {
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  'fairys-valtio-form-item-body-input.not.between': {
    justifyContent: 'flex-start',
    textAlign: 'left',
    alignItems: 'center',
  },
  'fairys-valtio-form-item-body-extra': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'fairys-valtio-form-item-body-extra-text': {
    fontSize: 12,
  },
  'fairys-valtio-form-item-help': {
    fontSize: 10,
    width: '100%',
  },
  'fairys-valtio-form-item-body-error': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    color: 'red',
    position: 'absolute',
    fontSize: 10,
    zIndex: 10,
  },
  'fairys-valtio-form-item-body-error-text': {
    color: 'red',
    fontSize: 10,
  },
  'fairys-valtio-form-item-body-error.bottom-left': {
    bottom: -14,
    left: 0,
    justifyContent: 'flex-start',
  },
  'fairys-valtio-form-item-body-error.bottom-right': {
    bottom: -14,
    right: 0,
    justifyContent: 'flex-end',
  },
  'fairys-valtio-form-item-body-error.top-right': {
    top: -4,
    right: 0,
    justifyContent: 'flex-end',
  },
  'fairys-valtio-form-item-body-error.top-left': {
    top: -4,
    left: 0,
    justifyContent: 'flex-start',
  },
  'fairys-valtio-form-item-body-error.left-border-top': {
    left: 0,
    bottom: -2,
    justifyContent: 'flex-start',
  },
  'fairys-valtio-form-item-body-error.right-border-top': {
    right: 0,
    bottom: -2,
    justifyContent: 'flex-end',
  },
  'input.between': {
    textAlign: 'right',
  },
});
