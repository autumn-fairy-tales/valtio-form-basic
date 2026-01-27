import { StyleSheet } from 'react-native';

export const layoutStyles = StyleSheet.create({
  'fairys-valtio-form-layout': {
    fontSize: 12,
    width: '100%',
    borderRadius: 8,
  },
  'fairys-valtio-form-layout.bordered': {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d1d5db',
  },
  'fairys-valtio-form-layout-header': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d1d5db',
  },
  'fairys-valtio-form-layout-header-title': {
    fontSize: 14,
    fontWeight: 'bold',
  },
  'fairys-valtio-form-layout-header-extra': {
    fontSize: 12,
  },
  'fairys-valtio-form-layout-body': {
    paddingHorizontal: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
});
