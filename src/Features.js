import React from 'react'
// import updatesIcon from "./assets/regular.png";
// import resonsive from './assets/responsive.png';
// import student from './assets/student.png';
// import routine from './assets/routine.png';
// import img from './assets/img.png';
// import transport from './assets/transport.png';
// import homework from './assets/homework.png';
// import pdf from "./assets/pdf.png"
import updatesIcon from "./assets/regular-updates.png";
import pdfIcon from "./assets/export-pdf.png";
import feesIcon from "./assets/fees-management.png";
import scheduleIcon from "./assets/class-schedule.png";
import graphIcon from "./assets/chart-analysis.png";
import transportIcon from "./assets/transport-management.png";
import qualityIcon from "./assets/quality-price.png";
import siblingIcon from "./assets/sibling-management.png";
import printIcon from "./assets/print-records.png";
import uiIcon from "./assets/user-interface.png";
import codeigniterIcon from "./assets/codeigniter-framework.png";
import customizeIcon from "./assets/customization.png";
import homeworkIcon from "./assets/homework-document.png";
import examIcon from "./assets/exam-management.png";
import hostelIcon from "./assets/hostel-management.png";
import messagingIcon from "./assets/internal-messaging.png";
import sectionIcon from "./assets/class-section.png";
import accountingIcon from "./assets/accounting.png";
import multiuserIcon from "./assets/multiuser-system.png";
import devSupportIcon from "./assets/developer-support.png";
import languageIcon from "./assets/multiple-languages.png";
import monitorIcon from "./assets/parent-monitor.png";
import profileIcon from "./assets/profile-system.png";
import libraryIcon from "./assets/library-management.png";
import attendanceIcon from "./assets/daily-attendance.png";
import databaseIcon from "./assets/database-backup.png";
import smsIcon from "./assets/sms-gateway.png";
const features = [
    {
        title: "Regular free updates",
        description: "Regular updates are available to download for free.",
        icon: updatesIcon,
      },
      {
        title: "Export data in PDF",
        description: "Export report data in PDF.",
        icon: pdfIcon,
      },
      {
        title: "Student fees management",
        description: "Manage student fees very easily.",
        icon: feesIcon,
      },
      {
        title: "Class routine schedule",
        description: "Very easy to create and manage class routine schedules.",
        icon: scheduleIcon,
      },
      {
        title: "Chart & Graph analysis in fees",
        description: "Chart & graph representation of fees and expenses.",
        icon: graphIcon,
      },
      {
        title: "Transport management",
        description: "Transport management for all routes.",
        icon: transportIcon,
      },
      {
        title: "Best quality at lowest price",
        description: "Best quality product offered at lowest price.",
        icon: qualityIcon,
      },
      {
        title: "Sibling Management",
        description: "Manage multiple children of single parent in one parent account.",
        icon: siblingIcon,
      },
      {
        title: "Print Records",
        description: "Take printout of every records.",
        icon: printIcon,
      },
      {
        title: "Responsive user interface",
        description: "Smart school will cover all kinds of devices seamlessly.",
        icon: uiIcon,
      },
      {
        title: "Codeigniter framework",
        description: "Built on latest version (3.0.0) of Codeigniter PHP framework.",
        icon: codeigniterIcon,
      },
      {
        title: "Easy customization",
        description: "Easily customizable with the help of understandable documentation.",
        icon: customizeIcon,
      },
      {
        title: "Home work document",
        description: "Attach and download study documents.",
        icon: homeworkIcon,
      },
      {
        title: "Exam marks management",
        description: "Manage exam marks of all student.",
        icon: examIcon,
      },
      {
        title: "Hostel management",
        description: "Manage all hostels and their rooms.",
        icon: hostelIcon,
      },
      {
        title: "Internal messaging",
        description: "Admin can send private messages to teacher, student and parent.",
        icon: messagingIcon,
      },
      {
        title: "Class-Section",
        description: "Organize classes in multiple sections for an easier management.",
        icon: sectionIcon,
      },
      {
        title: "Accounting",
        description: "Trace student fees and expenses all at a place.",
        icon: accountingIcon,
      },
      {
        title: "Multiuser account system",
        description: "Access for admin, teacher, student and parent.",
        icon: multiuserIcon,
      },
      {
        title: "Developer support ready",
        description: "Dedicated developer support is available any time.",
        icon: devSupportIcon,
      },
      {
        title: "Multiple language support",
        description: "Supports 21 different languages.",
        icon: languageIcon,
      },
      {
        title: "Parent monitor child activity",
        description: "Parent monitor all activities of his child.",
        icon: monitorIcon,
      },
      {
        title: "Profile system",
        description: "Edit profile settings as you wish.",
        icon: profileIcon,
      },
      {
        title: "Library management",
        description: "Systematic management of all library books.",
        icon: libraryIcon,
      },
      {
        title: "Daily attendance",
        description: "Managing daily attendance is now hassle free.",
        icon: attendanceIcon,
      },
      {
        title: "Database Backup / Restore",
        description: "Easily backup, restore the whole database.",
        icon: databaseIcon,
      },
      {
        title: "SMS gateway integration",
        description: "Get informed about student marks and events with SMS notifications.",
        icon: smsIcon,
      },
    ];
function Features() {
  return (
       <div className="bg-gray-50 w-screen pt-20">
      <div className="container mx-auto w-full px-6">
        <h2 className="text-3xl font-extrabold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              {/* Feature Icon */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              {/* Feature Title */}
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              {/* Feature Description */}
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>))}
            </div>
            </div>
            </div>


    
  )
}

export default Features
