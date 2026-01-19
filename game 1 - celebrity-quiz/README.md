# Celebrity Quiz - Android Deployment

This document provides instructions on how to package this web-based celebrity quiz game into a native Android application (`.apk`) using [Apache Cordova](https://cordova.apache.org/).

## Overview

Apache Cordova is a framework that allows you to build mobile apps using standard web technologies—HTML, CSS, and JavaScript. It works by wrapping your web application in a native container, which can then access the device's capabilities.

For a simple game like this quiz, Cordova is an excellent way to ship to Android quickly.

## Prerequisites

Before you begin, ensure you have the following installed and configured on your system:

1.  **Node.js and npm:** [Download and install Node.js](https://nodejs.org/), which includes npm.
2.  **Apache Cordova CLI:** Install it globally using npm:
    ```bash
    npm install -g cordova
    ```
3.  **Android Studio:** Install [Android Studio](https://developer.android.com/studio) and make sure the Android SDK is set up correctly. You will also need to configure your system's environment variables (`ANDROID_HOME`).

## Packaging Steps

Follow these steps to package the game for Android:

### 1. Create a New Cordova Project

From your terminal, run the following command to create a new Cordova project. Do this *outside* of the current project directory.

```bash
cordova create celebrity-quiz-android com.example.celebrityquiz "Celebrity Quiz"
```

### 2. Add the Android Platform

Navigate into the newly created project directory and add the Android platform.

```bash
cd celebrity-quiz-android
cordova platform add android
```

### 3. Copy Your Web Files

Copy the contents of this game's directory (`index.html`, `style.css`, `script.js`) into the `www` folder of your new Cordova project (`celebrity-quiz-android/www/`). Overwrite the default files that are there.

For example:

```bash
cp ../game\ 1\ -\ celebrity-quiz/* www/
```

*(Adjust the source path as necessary based on your directory structure.)*

### 4. Build the Android App

Run the build command to generate the `.apk` file.

```bash
cordova build android
```

### 5. Locate and Install the APK

If the build is successful, you will find the debug `.apk` file in the following directory:

`platforms/android/app/build/outputs/apk/debug/app-debug.apk`

You can now install this file on an Android emulator or a physical device to test the game. For a production release, you would need to sign the application.
