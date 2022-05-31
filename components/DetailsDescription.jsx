import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailsDescription() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Comments" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography>More Details</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eaque debitis dolore? Possimus mollitia quam atque qui deleniti distinctio
          inventore, cumque porro autem, optio aut neque vero, vitae magnam expedita doloribus. Amet saepe delectus similique quaerat totam maiores provident!
          Est nulla minus dicta deleniti tempore obcaecati quasi similique nemo iure nisi sunt cupiditate eum maiores sint quod, reprehenderit nostrum! Eveniet
          distinctio temporibus iusto mollitia provident eaque. Quam, ea officia fugiat culpa minus mollitia accusamus, quibusdam consequuntur, fugit velit qui
          excepturi sint? Assumenda beatae quia tenetur eaque animi. Odio pariatur quia rerum, ipsa accusamus repellat incidunt aliquid quibusdam maxime veniam
          vel eaque magnam temporibus officiis molestiae animi culpa illo voluptas autem alias qui harum sequi? Cum voluptatem dignissimos consequatur minus
          commodi.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Customer Review</Typography>
        <Typography>he also good and fresh fruit organic product see like look</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          <TextField fullWidth label="Write your comment" id="fullWidth" />
        </Typography>
      </TabPanel>
    </Box>
  );
}
