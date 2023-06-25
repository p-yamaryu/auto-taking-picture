setup:
	npm install

android: setup
	npx react-native run-android

ios: setup
	npx react-native run-ios