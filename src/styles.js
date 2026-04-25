import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#b3d9ff',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03396c',
  },
  contentScroll: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  noticiaContainer: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    minHeight: 180,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  noticiaBackgroundImage: {
    resizeMode: 'cover',
  },
  textoOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.42)',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#fff',
  },
  manchete: {
    fontSize: 14,
    marginBottom: 6,
    color: '#f0f0f0',
  },
  data: {
    fontSize: 12,
    color: '#d0d0d0',
  },
  footerContainer: {
    backgroundColor: '#b3d9ff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#03396c',
    fontWeight: '600',
  },
});