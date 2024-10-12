import wearableDevice from '../../assets/images/wearable-device.jpg';
import portableDevice from '../../assets/images/portable-device.jpg'
import mobileUI from '../../assets/images/FYP_presentation.png'
import momSleeping from '../../assets/images/mom-sleeping.webp'
import './FM.css';

function FM() {
    return (
        <div className="fm-main">
            <div className='fm-secondary'>
                <h2>Foetal Movement Detection System</h2>

                <div className='content'>

                    <div className='description'>
                        <p><strong>Technologies - </strong>IoT | Python | Arduino | Android | MySQL</p>
                        <p><strong>Key features - </strong>
                            <br></br>
                            - Foetal movement counting
                            <br></br>
                            - Foetal count Analysing
                            <br></br>
                            - Store history


                        </p>
                        <p>Aim of this project was to provide a revolutionary foetal kick counting system that allows continuous and accurate monitoring of foetal movements that can be used in day to day, with the goal of improving prenatal care and foetal well being.</p>
                        <p>This include 3 modules. <strong>Wearable device</strong> which include 2 ADXL 345 accelerometer sensors, Multiplexer, Arduino UNO R3 board and a HC-06 Bluetooth module.
                            Next an <strong>Android mobile app</strong> to interact with the user. Lastly a <strong>Flask backend</strong> to hold algorithms and models need to identify foetal movement signals.
                        </p>

                    </div>
                    <div className='cover-image-sector'>
                        <img src={momSleeping} alt="mom sleeping" className="image1"></img>
                    </div>
                </div>
                <div className='more-desc'>
                    <p>In the System design, this has a android mobile app which allows user to control the system. User has the ability to count foetal kicks, view count history, and to view a chartered visualisation of the count pattern. Sensors need to be attached to the abdomen of the mother. Signals detecting from the accelerometers are sent to the mobile app via bluetooth. App collect these signals and send to the backend to process in a api. Backend analyse the signal and get foetal count, then send it to the mobile app. As the persistence layer of the system MySQL database is created.
                    </p>
                    <p>System is made of 2 ADXL 345 accelerometer sensors to identify movements on the abdomen of the mother. A hybrid learning technique is used to increase the accuracy of the system. Means this uses both supervised and unsupervised machine learning. Magnitude difference of the x,y,z axes of the accelerometer is used to filter out artifacts from the signals.
                    </p>
                    <p>System is tested using a accelerometer signal dataset which had 334 foetal movement signals. System showed 89.22% TDR and 65.49% PPV (True detection rate - TDR, Positive prediction value - PPV).
                    </p>

                </div>
                <div className='pics-main'>
                    <div className='pics'>
                        <img src={wearableDevice} alt="wearable device" className="image2"></img>
                    </div>
                    <div className='pics'>
                        <img src={portableDevice} alt="portable device" className="image2"></img>
                    </div>
                    <div className='pics'>
                        <img src={mobileUI} alt="Mobile UI" className="image3"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FM;