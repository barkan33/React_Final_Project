import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';





export default function Footer() {
    return (
        <Box className="sections" sx={{ color: "#eeeeff", boxShadow: "6px 5px 6px #00000037", mt: 3 }} component="footer">
            <Grid container spacing={2} justifyContent="center" alignItems="flex-start" sx={{ p: 3 }}>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" gutterBottom>Opening Hours</Typography>
                    <Typography variant="body2">
                        Sunday-Thursday: 10:30 - 19:00 <br />
                        Friday: 10:00 - 15:00  <br />
                        Saturday: 10:30 - 18:30  <br />
                    </Typography>
                    <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "15px" }} >
                        <li style={{ background: "URL(https://www.cnv.co.il/Themes/Native/Content/img/payment_sprite.png)", backgroundPosition: "0 0", display: "inline-block", width: "40px", height: "32px", margin: "0 3px" }}  ></li>
                        <li style={{ background: "URL(https://www.cnv.co.il/Themes/Native/Content/img/payment_sprite.png)", backgroundPosition: "-40px 0", display: "inline-block", width: "40px", height: "32px", margin: "0 3px" }}  ></li>
                        <li style={{ background: "URL(https://www.cnv.co.il/Themes/Native/Content/img/payment_sprite.png)", backgroundPosition: "-80px 0", display: "inline-block", width: "40px", height: "32px", margin: "0 3px" }}  ></li>
                        <li style={{ background: "URL(https://www.cnv.co.il/Themes/Native/Content/img/payment_sprite.png)", backgroundPosition: "-120px 0", display: "inline-block", width: "40px", height: "32px", margin: "0 3px" }}  ></li>
                        <li style={{ background: "URL(https://www.cnv.co.il/Themes/Native/Content/img/payment_sprite.png)", backgroundPosition: "-160px 0", display: "inline-block", width: "40px", height: "32px", margin: "0 3px" }}  ></li>
                    </ul>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" gutterBottom>Information</Typography>
                    <Typography variant="body2">
                        About Us <br />
                        Terms of Service <br />
                        Shipping <br />
                        FAQ
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" gutterBottom>Customer Service</Typography>
                    <Typography variant="body2">
                        Contact Us <br />
                        Returns and Exchanges <br />
                        Order Tracking
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" gutterBottom>Contact Us</Typography>
                    <Typography variant="body2">
                        <FaMapMarkerAlt style={{ marginRight: 8 }} /> Address: Ruppin Technological College, Elon-City, Mars <br />
                        <FaPhone style={{ marginRight: 8 }} /> Phone: -972 527212388 <br />
                        <FaEnvelope style={{ marginRight: 8 }} /> Email: wonderlandmail@gmail.com
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Link href="#" target="_blank" rel="noopener" sx={{ mr: 2 }}>
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="https://twitter.com/Xmas_Wonderland" target="_blank" rel="noopener" sx={{ mr: 2 }}>
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/thewonderlandmarket/" target="_blank" rel="noopener">
                            <FaInstagram size={24} />
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h6" color="#eeeeff" align="center" sx={{ mt: 2 }}>
                © {new Date().getFullYear()} Wonderland Market
            </Typography>
        </Box >

    );
};