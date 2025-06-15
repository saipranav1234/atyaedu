import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const TallyForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadTally = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    loadTally();
  }, []);

  return (
    <div>
      {/* Load Tally Embed Script */}
      <Helmet>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Helmet>

      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "12px 24px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          display: "block",
          marginRight: "auto",
          marginTop: "1rem",
          marginLeft: "0.5rem"
        }}
      >
        Registration
      </button>

      {/* Modal (Only visible when isOpen is true) */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)", // Dim background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsOpen(false)} // Close modal when clicking outside
        >
          <div
            style={{
              width: "90%",
              maxWidth: "600px",
              height: "90vh", // Set height to 90% of the viewport
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ✖
            </button>

            {/* Embedded Tally Form */}
            <iframe
              src="https://tally.so/r/wgkRWl"
              width="100%"
              height="100%" // Make iframe fill the modal height
              frameBorder="0"
              title="Tally Form"
              style={{ borderRadius: "8px", flexGrow: 1 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TallyForm;
