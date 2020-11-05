# gallery-editor-ynov

A gallery editor app developped in Angular around Ionic framework during WebMobile class at Ynov Toulouse campus

## How to start the app

### Requirements

- Ionic cordova clis `npm install -g ionic cordova`.

- Java JDK 1.8 available [here](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

- Gradle 6.7 available [here](https://gradle.org/releases/)

- All envionnement variables setted :
  - For Path section : add `<Path to gradle folder>gradle-6.7\bin`

  - For system variables section :

        set ANDROID_SDK_ROOT=<Path to android sdk>\Android\Sdk

        set ANDROID_HOME=<Path to android sdk>\Android\Sdk (optional)

        set JAVA_HOME=<Path to java 1.8 JDK>jdk1.8.0_271

### Android run

Open a terminal inside project's folder and give these following instructions :

    npm install
    ionic cordova run android --device --verbose

Let things working and some seconds later the app will be installed into your connected android device.

Feels free to open an issue if any problems encourted with log generated from the last command.
