/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpeg";

const imageAltText = "Stylish Laptop image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Little Lemon Restaurant 🎉",
    description:
      "Welcome to the Little Lemon Restaurant Django web project! This project is designed to showcase a simple restaurant website with features like booking, menu display, and more.",
    url: "https://hamzasajjad141.github.io/Little-Lemon-Restaurant/",
  },
  {
    title: "4d-Notepad-DataStructures-Project",
    description:
      "Welcome to the Notepad Project, a simple console-based notepad implementation in C++ designed to run on Visual Studio. This project allows users to perform various text-related operations such as inserting, deleting, searching, copying, pasting, finding and replacing text, counting total words, and more.",
    url: "https://github.com/HamzaSajjad141/4d-Notepad-DataStructures-Project",
  },
  {
    title: "Predicting-DiabetesMellitus-Using-MachineLearning-Techniques",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/HamzaSajjad141/Predicting-DiabetesMellitus-Using-MachineLearning-Techniques",
  },
  {
    title: "LeetCode_Question_Find-the-Index-of-the-First-Occurrence-in-a-String",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://github.com/HamzaSajjad141/LeetCode_Question_Find-the-Index-of-the-First-Occurrence-in-a-String",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
