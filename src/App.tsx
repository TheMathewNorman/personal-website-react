import React from 'react';
import logo from './images/initials.svg';
import './App.css';
import './css/icons.css'

function App() {
  return (
    <div className="App">
      <header className="header">
      <svg xmlns="http://www.w3.org/2000/svg" width="1534.2" height="280.12" viewBox="0 0 1534.2 280.12" className='logo'>
        <path id="name" d="M106.2-137.8H81.8L60.4-43.4,38-137.8H13.8L6,0H22.4L26-72c1-17.2.8-42.2.4-49.8l24.8,97H68.6l23.2-97c0,6.8,0,30.8,1.2,49.8L97.2,0H114ZM215.6-23V-73.6c0-20.8-13.2-34-39.4-34-10.4,0-21.6,2-34.6,6.6l4.6,12.8c10.8-3.8,20.4-5.4,27.4-5.4,15.6,0,25,5.6,25,21V-64H183c-31.8,0-49.2,12.2-49.2,33.8,0,19.6,12.8,32.4,34,32.4,13.6,0,25.4-5,33-14.8C203.6-3,211,1.2,220,2.4l4.2-12C218.2-11.4,215.6-14.6,215.6-23ZM172-10.4c-13.8,0-20.2-6.8-20.2-20,0-13.6,8.4-22,31.6-22h15.2v27C192.4-16,182.4-10.4,172-10.4Zm171.8,5-6.6-11.4a42.492,42.492,0,0,1-20.2,5c-14.4,0-20.2-6.2-20.2-17.8V-92.2h34.4l2.2-13.2H296.8v-25.8l-16.8,2v23.8H255.8v13.2H280v62.8C280-11,292.8,2.2,315.4,2.2,325.4,2.2,336.4-.6,343.8-5.4Zm53-144L380-147.6V0h16.8V-76.8c5.6-8.2,16.4-17.4,28.2-17.4,12.6,0,18.4,5.4,18.4,18V0h16.8V-76.4c0-19.6-9-31.2-29.6-31.2a42.7,42.7,0,0,0-33.8,16.8ZM513.4-46.8h70.8c.2-2.2.4-5.4.4-9,0-32-16.4-51.8-43-51.8-28,0-45.8,23.2-45.8,55,0,32.8,17.4,54.8,48.2,54.8A60.09,60.09,0,0,0,580-10l-7.8-11.2c-9.4,6.2-17.4,9.4-28.2,9.4C527.8-11.8,514.2-22.4,513.4-46.8Zm28.4-47c16,0,26,11.6,26.4,34.2H513.4C514.8-82.8,526.2-93.8,541.8-93.8ZM698.2,0l18.2-105.4H700.2l-13.6,95L670.8-92H651L634.2-10.4l-13.6-95h-17L622.6,0h23.2l14.8-77.2L674.4,0ZM919,0h24.4V-137.8H927.2v69c0,24.8,2.2,47,2.4,52.6L880.2-137.8H856.6V0h16.2V-69c0-21.2-2-46-2.4-52Zm101.2-107.6c-29.6,0-45.6,22.6-45.6,55,0,33.2,15.8,54.8,45.4,54.8,29.4,0,45.4-22.6,45.4-55C1065.4-86,1049.8-107.6,1020.2-107.6Zm0,13.8c18,0,27,13.2,27,41,0,28.2-9,41.2-27.2,41.2s-27.2-13-27.2-41S1002-93.8,1020.2-93.8Zm151-13.8c-19,0-29.8,10-37.8,27.2l-3.2-25H1101v13h16.6V-13H1101V0h54.8V-13h-21.4V-57.4c6.8-23.2,18.4-34.8,34.6-34.8h1v22.6h13.6l2.4-35.8A54.852,54.852,0,0,0,1171.2-107.6Zm118.2,0c-10.6,0-17.4,5.6-23.2,14-3.2-10.8-11-14-19-14-10.6,0-17.2,6.4-22.8,14.6l-1.2-12.4h-13V0h15.4V-81.8c5.8-9,11.8-12.6,18.4-12.6,7.6,0,8.2,5.4,8.2,18.8V0h15.6V-81.8c5.8-9,12-12.6,18.4-12.6,7.6,0,8.2,5.4,8.2,18.8V0h15.4V-78.4C1309.8-102.6,1299.6-107.6,1289.4-107.6ZM1415.6-23V-73.6c0-20.8-13.2-34-39.4-34-10.4,0-21.6,2-34.6,6.6l4.6,12.8c10.8-3.8,20.4-5.4,27.4-5.4,15.6,0,25,5.6,25,21V-64H1383c-31.8,0-49.2,12.2-49.2,33.8,0,19.6,12.8,32.4,34,32.4,13.6,0,25.4-5,33-14.8,2.8,9.6,10.2,13.8,19.2,15l4.2-12C1418.2-11.4,1415.6-14.6,1415.6-23ZM1372-10.4c-13.8,0-20.2-6.8-20.2-20,0-13.6,8.4-22,31.6-22h15.2v27C1392.4-16,1382.4-10.4,1372-10.4ZM1460,0h16.8V-76.6c5.6-8.4,16.2-17.6,28.6-17.6,15.8,0,18,8.6,18,30.2V0h16.8V-76.4c0-19.6-9-31.2-29.6-31.2a45.761,45.761,0,0,0-34.8,17l-1.4-14.8H1460Z" transform="translate(-6 149.4)" fill="#fff"/>
        <path id="title" d="M32.22-11.46c0-7.86-5.64-10.56-12.12-12.42C12.24-26.16,9.72-27.96,9.72-31.5c0-4.14,3.72-6.12,8.28-6.12a14.789,14.789,0,0,1,9.9,3.72l3.12-3.36A19.067,19.067,0,0,0,17.82-42C9.9-42,4.44-37.56,4.44-31.32c0,6.54,5.1,9.54,13.32,11.94,7.08,2.04,9,4.02,9,8.04,0,5.22-4.56,7.68-9.6,7.68A15.828,15.828,0,0,1,5.7-8.1L2.58-4.56C6.06-1.2,11.04.66,17.1.66,26.7.66,32.22-4.32,32.22-11.46ZM54.06-32.28c-8.88,0-13.68,6.78-13.68,16.5C40.38-5.82,45.12.66,54,.66c8.82,0,13.62-6.78,13.62-16.5C67.62-25.8,62.94-32.28,54.06-32.28Zm0,4.14c5.4,0,8.1,3.96,8.1,12.3,0,8.46-2.7,12.36-8.16,12.36s-8.16-3.9-8.16-12.3S48.6-28.14,54.06-28.14Zm42.6-16.8c-6.54,0-11.52,3.66-11.52,9.48v6.3h-7.5v4.02h7.5V0h5.1V-25.14h10.14l.54-4.02H90.24v-6.42c0-3.48,2.22-5.22,6.6-5.22a16.874,16.874,0,0,1,6.78,1.32l1.62-3.78A21.629,21.629,0,0,0,96.66-44.94ZM139.14-1.62l-1.98-3.42a12.748,12.748,0,0,1-6.06,1.5c-4.32,0-6.06-1.86-6.06-5.34V-27.66h10.32l.66-3.96H125.04v-7.74l-5.04.6v7.14h-7.26v3.96H120V-8.82C120-3.3,123.84.66,130.62.66A16.563,16.563,0,0,0,139.14-1.62ZM173.46,0l5.46-31.62h-4.86l-4.08,28.5L165.24-27.6H159.3L154.26-3.12l-4.08-28.5h-5.1L150.78,0h6.96l4.44-23.16L166.32,0Zm35.22-6.9V-22.08c0-6.24-3.96-10.2-11.82-10.2a30.843,30.843,0,0,0-10.38,1.98l1.38,3.84a25.853,25.853,0,0,1,8.22-1.62c4.68,0,7.5,1.68,7.5,6.3v2.58H198.9c-9.54,0-14.76,3.66-14.76,10.14,0,5.88,3.84,9.72,10.2,9.72a12.109,12.109,0,0,0,9.9-4.44C205.08-.9,207.3.36,210,.72l1.26-3.6C209.46-3.42,208.68-4.38,208.68-6.9ZM195.6-3.12c-4.14,0-6.06-2.04-6.06-6,0-4.08,2.52-6.6,9.48-6.6h4.56v8.1A9.67,9.67,0,0,1,195.6-3.12Zm47.76-29.16c-5.7,0-8.94,3-11.34,8.16l-.96-7.5H222.3v3.9h4.98V-3.9H222.3V0h16.44V-3.9h-6.42V-17.22c2.04-6.96,5.52-10.44,10.38-10.44h.3v6.78h4.08l.72-10.74A16.456,16.456,0,0,0,243.36-32.28Zm18.66,18.24h21.24c.06-.66.12-1.62.12-2.7,0-9.6-4.92-15.54-12.9-15.54-8.4,0-13.74,6.96-13.74,16.5,0,9.84,5.22,16.44,14.46,16.44A18.027,18.027,0,0,0,282-3l-2.34-3.36a14.323,14.323,0,0,1-8.46,2.82C266.34-3.54,262.26-6.72,262.02-14.04Zm8.52-14.1c4.8,0,7.8,3.48,7.92,10.26H262.02C262.44-24.84,265.86-28.14,270.54-28.14Zm66.18-8.88h17.7l.6-4.32H331.56V0h24V-4.2H336.72V-18.84h15.36V-23.1H336.72ZM366,0h5.04V-22.98c1.68-2.52,4.86-5.28,8.58-5.28,4.74,0,5.4,2.58,5.4,9.06V0h5.04V-22.92c0-5.88-2.7-9.36-8.88-9.36a13.728,13.728,0,0,0-10.44,5.1l-.42-4.44H366Zm61.74-34.92c-3.72,1.56-6.48,2.64-14.4,2.64-7.5,0-12.6,4.56-12.6,10.98a8.956,8.956,0,0,0,5.28,8.7c-2.28,1.5-3.48,3.54-3.48,5.52,0,3.18,2.46,6,7.98,6h5.64c4.02,0,7.08,1.5,7.08,4.5,0,3.42-3.06,5.22-9.96,5.22-7.08,0-8.76-1.74-8.76-5.46h-4.56c0,6.42,3.24,9.54,13.32,9.54,9.6,0,15.06-3.42,15.06-9.6,0-4.92-4.8-8.58-11.16-8.58h-5.7c-3.24,0-4.2-1.2-4.2-2.7a4.214,4.214,0,0,1,1.62-3.06,13.258,13.258,0,0,0,4.74.66c7.5,0,11.88-4.5,11.88-10.74,0-3.6-1.8-6.3-5.52-7.98,3.54,0,6.6-.06,9.24-.9Zm-14.46,6.36c4.68,0,7.02,2.46,7.02,7.2,0,4.68-2.4,7.44-6.9,7.44-5.16,0-7.5-3.06-7.5-7.38C405.9-25.56,408.18-28.56,413.28-28.56ZM450-46.38a3.418,3.418,0,0,0-3.6,3.54A3.418,3.418,0,0,0,450-39.3a3.484,3.484,0,0,0,3.72-3.54A3.484,3.484,0,0,0,450-46.38Zm4.02,14.76H439.56v4.02h9.42V-4.02h-9.72V0H462.9V-4.02h-8.88ZM474,0h5.04V-22.98c1.68-2.52,4.86-5.28,8.58-5.28,4.74,0,5.4,2.58,5.4,9.06V0h5.04V-22.92c0-5.88-2.7-9.36-8.88-9.36a13.728,13.728,0,0,0-10.44,5.1l-.42-4.44H474Zm40.02-14.04h21.24c.06-.66.12-1.62.12-2.7,0-9.6-4.92-15.54-12.9-15.54-8.4,0-13.74,6.96-13.74,16.5,0,9.84,5.22,16.44,14.46,16.44A18.027,18.027,0,0,0,534-3l-2.34-3.36a14.323,14.323,0,0,1-8.46,2.82C518.34-3.54,514.26-6.72,514.02-14.04Zm8.52-14.1c4.8,0,7.8,3.48,7.92,10.26H514.02C514.44-24.84,517.86-28.14,522.54-28.14Zm27.48,14.1h21.24c.06-.66.12-1.62.12-2.7,0-9.6-4.92-15.54-12.9-15.54-8.4,0-13.74,6.96-13.74,16.5,0,9.84,5.22,16.44,14.46,16.44A18.027,18.027,0,0,0,570-3l-2.34-3.36a14.323,14.323,0,0,1-8.46,2.82C554.34-3.54,550.26-6.72,550.02-14.04Zm8.52-14.1c4.8,0,7.8,3.48,7.92,10.26H550.02C550.44-24.84,553.86-28.14,558.54-28.14Zm44.82-4.14c-5.7,0-8.94,3-11.34,8.16l-.96-7.5H582.3v3.9h4.98V-3.9H582.3V0h16.44V-3.9h-6.42V-17.22c2.04-6.96,5.52-10.44,10.38-10.44h.3v6.78h4.08l.72-10.74A16.456,16.456,0,0,0,603.36-32.28Z" transform="translate(468 267.4)" fill="#fff"/>
        <rect id="separator" width="1102" height="3" transform="translate(216 194.4)" fill="#fff"/>
      </svg>


      </header>
    </div>
  );
}

export default App;
