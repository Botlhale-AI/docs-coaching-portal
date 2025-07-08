---
id: Courses
title: Courses
sidebar_label: Courses
description: Create and manage training courses for agents
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="bg-vela-background rounded-lg p-6 mb-8 shadow-md">

# <span className="text-vela-orange font-bold">Courses</span>

<p className="text-vela-text-color text-lg mb-6">
  This section allows you to create and manage the courses that agents will learn from. All created courses will appear as tiles on the Courses main page.
</p>

<div className="grid md:grid-cols-2 gap-6 mb-8">
  <div className="bg-vela-background-card rounded-xl p-6 border border-vela-drawer-outline shadow-sm hover:shadow-md transition-all">
    <h3 className="text-vela-orange text-xl font-bold mb-3">Browse Courses</h3>
    <p className="text-vela-text-color">Access all available training materials organized by category and skill level.</p>
  </div>
  
  <div className="bg-vela-background-card rounded-xl p-6 border border-vela-drawer-outline shadow-sm hover:shadow-md transition-all">
    <h3 className="text-vela-orange text-xl font-bold mb-3">Track Progress</h3>
    <p className="text-vela-text-color">Monitor completion rates and assessment scores for all assigned courses.</p>
  </div>
</div>

## <span className="text-vela-orange font-bold">Creating a Course</span>

<div className="bg-vela-background-card rounded-lg p-6 mb-6 border-l-4 border-vela-orange">
  <p className="text-vela-text-color">
    Use this section to create a new course. The following details are required:
  </p>
</div>

<div className="space-y-4 mb-8">
  <div className="bg-vela-background-drawer p-4 rounded-lg border border-vela-drawer-outline">
    <h3 className="font-bold text-vela-text-color">Title</h3>
    <p className="text-vela-text-color">The name of the course</p>
  </div>

  <div className="bg-vela-background-drawer p-4 rounded-lg border border-vela-drawer-outline">
    <h3 className="font-bold text-vela-text-color">Category</h3>
    <p className="text-vela-text-color">The classification or topic under which the course falls</p>
  </div>

  <div className="bg-vela-background-drawer p-4 rounded-lg border border-vela-drawer-outline">
    <h3 className="font-bold text-vela-text-color">Description</h3>
    <p className="text-vela-text-color">A brief summary of the course content</p>
  </div>

  <div className="bg-vela-background-drawer p-4 rounded-lg border border-vela-drawer-outline">
    <h3 className="font-bold text-vela-text-color">Scope</h3>
    <p className="text-vela-text-color">Define the scope or objectives of the course</p>
  </div>

  <div className="bg-vela-background-drawer p-4 rounded-lg border border-vela-drawer-outline">
    <h3 className="font-bold text-vela-text-color">Training Initiation Range</h3>
    <p className="text-vela-text-color">The minimum score required for an agent to pass the course</p>
  </div>
</div>

## <span className="text-vela-orange font-bold">Adding Course Content</span>

<div className="bg-vela-background-card p-6 rounded-lg mb-6 shadow-sm">
  <p className="text-vela-text-color mb-4">
    Course materials can be uploaded in PDF format. You can either drag and drop the file into the upload area or browse your device to locate it. Alternatively, you may provide an external link to the course material.
  </p>
  
  <div className="border-2 border-dashed border-vela-drawer-outline rounded-lg p-8 text-center">
    <div className="text-vela-orange text-4xl mb-2">
      <i className="fas fa-cloud-upload-alt"></i>
    </div>
    <p className="text-vela-text-color">Drag and drop your files here</p>
    <p className="text-vela-text-color text-sm opacity-70">or</p>
    <button className="mt-2 bg-vela-button text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
      Browse Files
    </button>
  </div>
</div>

## <span className="text-vela-orange font-bold">Selecting a Course Cover Image</span>

<div className="bg-vela-background-card p-6 rounded-lg mb-6 shadow-sm">
  <p className="text-vela-text-color mb-4">
    The cover image will be displayed on the course tile on the Courses home page. You can upload an image from your device or choose from a selection of preloaded course themes.
  </p>
  
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-vela-background-drawer rounded-lg p-2 border border-vela-drawer-outline hover:border-vela-orange cursor-pointer transition-colors">
      <div className="aspect-video bg-gradient-to-br from-vela-blue to-vela-green rounded-md"></div>
      <p className="text-center mt-2 text-vela-text-color text-sm">Sales</p>
    </div>
    
    <div className="bg-vela-background-drawer rounded-lg p-2 border border-vela-drawer-outline hover:border-vela-orange cursor-pointer transition-colors">
      <div className="aspect-video bg-gradient-to-br from-vela-orange to-vela-yellow rounded-md"></div>
      <p className="text-center mt-2 text-vela-text-color text-sm">Customer Service</p>
    </div>
    
    <div className="bg-vela-background-drawer rounded-lg p-2 border border-vela-drawer-outline hover:border-vela-orange cursor-pointer transition-colors">
      <div className="aspect-video bg-gradient-to-br from-vela-red to-vela-orange rounded-md"></div>
      <p className="text-center mt-2 text-vela-text-color text-sm">Leadership</p>
    </div>
  </div>
</div>

## <span className="text-vela-orange font-bold">Adding a Quiz</span>

<div className="bg-vela-background-card p-6 rounded-lg mb-6 shadow-sm">
  <p className="text-vela-text-color mb-4">
    Create a quiz to assess agents' understanding of the course material. Questions can be added in the following formats:
  </p>
  
  <ul className="list-disc pl-6 mb-6 text-vela-text-color">
    <li className="mb-2">Multiple choice</li>
    <li className="mb-2">Short paragraph</li>
    <li className="mb-2">Long paragraph</li>
  </ul>
  
  <p className="text-vela-text-color mb-4">
    Each question can be assigned a specific point value. Additionally, you can mark questions as mandatory using the toggle option.
  </p>
  
  <Tabs>
    <TabItem value="multiple-choice" label="Multiple Choice" default>
      <div className="bg-vela-background-drawer p-4 rounded-lg mt-4">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold text-vela-text-color">Question 1</h4>
          <span className="text-vela-orange">10 points</span>
        </div>
        <p className="text-vela-text-color mb-4">What is the primary goal of active listening?</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 border border-vela-drawer-outline rounded-md bg-vela-background">
            <input type="radio" name="q1" id="q1a" className="accent-vela-orange" />
            <label htmlFor="q1a" className="text-vela-text-color">To formulate your response while the customer is speaking</label>
          </div>
          <div className="flex items-center gap-2 p-2 border border-vela-drawer-outline rounded-md bg-vela-background">
            <input type="radio" name="q1" id="q1b" className="accent-vela-orange" />
            <label htmlFor="q1b" className="text-vela-text-color">To understand the customer's needs fully before responding</label>
          </div>
          <div className="flex items-center gap-2 p-2 border border-vela-drawer-outline rounded-md bg-vela-background">
            <input type="radio" name="q1" id="q1c" className="accent-vela-orange" />
            <label htmlFor="q1c" className="text-vela-text-color">To minimize the time spent on each call</label>
          </div>
        </div>
      </div>
    </TabItem>
    <TabItem value="short-paragraph" label="Short Paragraph">
      <div className="bg-vela-background-drawer p-4 rounded-lg mt-4">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold text-vela-text-color">Question 2</h4>
          <span className="text-vela-orange">15 points</span>
        </div>
        <p className="text-vela-text-color mb-4">Briefly explain how to handle an angry customer in 2-3 sentences.</p>
        <textarea className="w-full p-3 rounded-md border border-vela-drawer-outline bg-vela-background text-vela-text-color" rows="3" placeholder="Enter your answer here..."></textarea>
      </div>
    </TabItem>
  </Tabs>
</div>

## <span className="text-vela-orange font-bold">Setting Deadlines and Reminders</span>

<div className="space-y-6 mb-6">
  <div className="bg-vela-background-card p-6 rounded-lg shadow-sm">
    <h3 className="font-bold text-vela-text-color mb-4">Quiz Retakes</h3>
    <p className="text-vela-text-color mb-4">You can allow agents to retake the quiz if they do not pass. Specify the number of permitted retake attempts.</p>
    <div className="flex items-center gap-4">
      <input type="number" min="0" max="10" value="3" className="w-16 p-2 border border-vela-drawer-outline rounded-md bg-vela-background text-vela-text-color" />
      <span className="text-vela-text-color">Maximum retake attempts</span>
    </div>
  </div>
  
  <div className="bg-vela-background-card p-6 rounded-lg shadow-sm">
    <h3 className="font-bold text-vela-text-color mb-4">Deadline</h3>
    <p className="text-vela-text-color mb-4">Set a time frame within which agents must complete the course after it has been assigned.</p>
    <div className="flex items-center gap-4">
      <input type="number" min="1" max="90" value="14" className="w-16 p-2 border border-vela-drawer-outline rounded-md bg-vela-background text-vela-text-color" />
      <span className="text-vela-text-color">Days to complete</span>
    </div>
  </div>
  
  <div className="bg-vela-background-card p-6 rounded-lg shadow-sm">
    <h3 className="font-bold text-vela-text-color mb-4">Course Nudges</h3>
    <p className="text-vela-text-color mb-4">Automated reminders can be sent to agents to prompt them to complete the course before the deadline.</p>
    <div className="flex items-center gap-2">
      <input type="checkbox" id="reminder1" className="accent-vela-orange" checked />
      <label htmlFor="reminder1" className="text-vela-text-color">Send reminder 7 days before deadline</label>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <input type="checkbox" id="reminder2" className="accent-vela-orange" checked />
      <label htmlFor="reminder2" className="text-vela-text-color">Send reminder 3 days before deadline</label>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <input type="checkbox" id="reminder3" className="accent-vela-orange" checked />
      <label htmlFor="reminder3" className="text-vela-text-color">Send reminder 1 day before deadline</label>
    </div>
  </div>
</div>

<div className="flex justify-end gap-4 mt-8">
  <button className="px-6 py-2 border border-vela-button-alt text-vela-text-color rounded-md hover:bg-vela-background-drawer transition-colors">
    Save as Draft
  </button>
  <button className="px-6 py-2 bg-vela-button text-white rounded-md hover:opacity-90 transition-opacity">
    Publish Course
  </button>
</div>

</div>
