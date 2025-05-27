# Zephyr Project Overview

## Introduction

Initially, I started by understanding what the Zephyr tool is. After grasping its basics, I dove into the documentation to better comprehend the development workflow and the features the tool offers.  
I had never heard of Zephyr before, but I was pleasantly surprised as I read through the documentation and discovered the extensive range of functionalities and integrations it supports.  
Currently, Zephyr is primarily designed for Module Federation, though it may work with other architectures. However, the tool officially guarantees functionality for Module Federation at this time.

## Development

With this understanding, I began the development process by creating the container application using Rspack. My first step was to implement the Zephyr plugin. The key was understanding how the plugin works and the role of the `withZephyr()` function. It was fascinating to learn that this function integrates Zephyr Cloud into the application's build process, enabling automatic deployment upon building, allowing you to see your application running in the cloud within seconds.  

The plugin collects application information, and after the build, it automatically generates a link in the terminal, enabling you to preview your application running seamlessly. One point to note is the need to be mindful of how you run the application, as it can generate previews even with `pnpm dev`.  
Additionally, the plugin facilitates dependency management between the container (host) and the applications (remotes), streamlining the integration and maintenance of microfrontends.  
The tool also supports integration with various bundlers, including Webpack, Rspack, Rollup, and Vite.

The development was much more productive and fun using a new tool compared to another time when I created a test application to better understand the structural part of the federation module.

You can check it out in this repository
https://github.com/rhayann1337/microfrontend-with-module-federation

## Benefits of Using Zephyr Cloud

Beyond its numerous utilities for aiding the integration and development of microfrontend applications, Zephyr Cloud offers several key benefits:  
- It enables deployment in seconds.  
- It generates a link for each build, allowing it to be viewed on the web. This is particularly valuable for workflows where team members need to validate a feature's development without requiring a full deployment.  
- It is compatible with various frameworks and bundlers.  
- It supports integration with other providers.
- You can specify which version of the remote app the host should use by adding it to the host's package.json (Example below)

<pre>"zephyrDependencies": {
    "post": "0.0.1",
    "follow": "0.0.1"
}</pre>

## Repo examples

https://github.com/ZephyrCloudIO/zephyr-examples

## Examples using images

![image](https://github.com/user-attachments/assets/883b0039-e1f3-4345-a4d4-03b8ffb6e75c)

![image](https://github.com/user-attachments/assets/68c4708b-b53f-40d8-b1e0-c7f02ff699cd)
