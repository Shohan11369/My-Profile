import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionUsage() {
  return (
   <div className="bg-[url('/bg5.jpg')] bg-cover ">
     <div className="grid md:grid-cols-2 mx-auto w-[90%] gap-12  text-white ">
      {/* Right side */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border mt-6 border-gray-700 mb-8">
        <h1 className="text-white font-semibold md:text-2xl text-xl mb-6">
          🚀 Special Functional Projects
        </h1>

        {/* To Do App */}
        <Accordion
          style={{ backgroundColor: "#1E293B", color: "white" }}
          className="rounded-xl overflow-hidden shadow-md mt-3"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-400" />}
          >
            <Typography component="span" className="font-bold text-lg">
              To Do App
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-800">
            <a
              href="https://playful-klepon-f1e50b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center hover:text-blue-300 transition"
            >
              <span>📝 To Do Web</span>
              <span className="underline">Try it</span>
            </a>
          </AccordionDetails>
        </Accordion>

        {/* Balance */}
        <Accordion
          style={{ backgroundColor: "#1E293B", color: "white" }}
          className="rounded-xl overflow-hidden shadow-md mt-3"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-400" />}
          >
            <Typography component="span" className="font-bold text-lg">
             Bank App
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-800">
            <a
              href="https://bejewelled-dango-15d034.netlify.app/#"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center hover:text-blue-300 transition"
            >
              <span>💳 Balance Tracker</span>
              <span className="underline">Check</span>
            </a>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Left side */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl mt-6 border border-gray-700 mb-8">
        <h1 className="text-white font-semibold md:text-2xl text-xl mb-6">
          🌍 Website Projects
        </h1>

        
        {/* IT Support */}
        <Accordion
          style={{ backgroundColor: "#1E293B", color: "white" }}
          className="rounded-xl overflow-hidden shadow-md mt-3"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-400" />}
          >
            <Typography component="span" className="font-bold text-lg">
              IT Support Website
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-800">
            <a
              href="https://itwebsite18.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center hover:text-blue-300 transition"
            >
              <span>💻 IT Services</span>
              <span className="underline">Visit</span>
            </a>
          </AccordionDetails>
        </Accordion>

        {/* Hotel Website */}
        <Accordion
          style={{ backgroundColor: "#1E293B", color: "white" }}
          className="rounded-xl overflow-hidden shadow-md mt-3"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-400" />}
          >
            <Typography component="span" className="font-bold text-lg">
              Hotel Business Website
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-800">
            <a
              href="https://playful-custard-913249.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center hover:text-blue-300 transition"
            >
              <span>🏨 Hotel Web</span>
              <span className="underline">Visit</span>
            </a>
          </AccordionDetails>
        </Accordion>

        {/* Movie App */}
        <Accordion
          style={{ backgroundColor: "#1E293B", color: "white" }}
          className="rounded-xl overflow-hidden shadow-md mt-3"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-400" />}
          >
            <Typography component="span" className="font-bold text-lg">
              Movie Web App
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-800">
            <a
              href="https://shohan11369.github.io/css-project2/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center hover:text-blue-300 transition"
            >
              <span>🎬 Movie Website</span>
              <span className="underline">Visit</span>
            </a>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
   </div>
  );
}

export default AccordionUsage;
