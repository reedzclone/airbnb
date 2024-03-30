import "./ProgressBar.css";
import { LinearProgress, Box } from "@mui/material";

function ProgressBar() {
  return (
    <div className="progress-bar">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        className="progress"
      >
        <div className="progress-title">Cleanliness</div>
        <LinearProgress
          variant="determinate"
          value={100} // Placeholder value (50%) to ensure the bars are visible
          sx={{
            width: "60%",
            height: 8,
            borderRadius: 10,
            bgcolor: "grey.300",
          }} // Gray background
          className="lprogress"
        />
        <span className="guage">5.0</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        className="progress"
      >
        <div className="progress-title">Accuracy</div>
        <LinearProgress
          variant="determinate"
          value={98} // Placeholder value (50%) to ensure the bars are visible
          sx={{
            width: "60%",
            height: 8,
            borderRadius: 10,
            bgcolor: "grey.300",
          }} // Gray background
          className="lprogress"
        />
        <span className="guage">4.9</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        className="progress"
      >
        <div className="progress-title">Communication</div>
        <LinearProgress
          variant="determinate"
          value={96} // Placeholder value (50%) to ensure the bars are visible
          sx={{
            width: "60%",
            height: 8,
            borderRadius: 10,
            bgcolor: "grey.300",
          }} // Gray background
          className="lprogress"
        />
        <span className="guage">4.8</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        className="progress"
      >
        <div className="progress-title">Location</div>
        <LinearProgress
          variant="determinate"
          value={96} // Placeholder value (50%) to ensure the bars are visible
          sx={{
            width: "60%",
            height: 8,
            borderRadius: 10,
            bgcolor: "grey.300",
          }} // Gray background
          className="lprogress"
        />
        <span className="guage">4.8</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        className="progress"
      >
        <div className="progress-title">Check-in</div>
        <LinearProgress
          variant="determinate"
          value={98} // Placeholder value (50%) to ensure the bars are visible
          sx={{
            width: "60%",
            height: 8,
            borderRadius: 10,
            bgcolor: "grey.300",
          }} // Gray background
          className="lprogress"
        />
        <span className="guage">4.9</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        className="progress"
      >
        <div className="progress-title">Value</div>
        <LinearProgress
          variant="determinate"
          value={85} // Placeholder value (50%) to ensure the bars are visible
          sx={{
            width: "60%",
            height: 8,
            borderRadius: 10,
            bgcolor: "grey.300",
          }} // Gray background
          className="lprogress"
        />
        <span className="guage">4.2</span>
      </Box>
    </div>
  );
}

export default ProgressBar;
