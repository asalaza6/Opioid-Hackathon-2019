import React from 'react';
import markersList from './components/providerdata';
import styles from './components/stylesheet';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { View, Text, Button, ScrollView, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class MenuScreen extends React.Component {
  render() {
    return (
      <View style={{width:"100%",flexGrow:1,flex:1}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
            <View style = {styles.menuOne}>
              <ScrollView>
                <Text style = {styles.menuTitle}>Outreach & Education </Text>
                <Text style = {styles.menuSubtitle}>What is opioid abuse?</Text>
                <Text style = {styles.menuNormal}>Opioid use disorder is a chronic disease that causes health, social, and economic problems. Some opioids are prescribed by doctors as pain killers to manage sever and chronic pain, these medications include, oxymorphone, hydrocodone, codeine, and morphine. Heroin for example is an illegal opiate drug abuse. Opioid use disorder changes the chemistry of the brain and leads to drug tolerance, which requires higher doses for the same effect. This disorder can further create physical and psychological symptoms which include cramping, diarrhea, and anxiety. Overdose can also occur which causes breathing to slow or stop, leading to unconsciousness or even death if not treated immediately. </Text>
                <Text style = {styles.menuSubtitle}>Treatment options/methods/services</Text>
                <Text style = {styles.menuNormal}>Treatment options include counseling and behavioral therapies, medication, medication assisted therapy, and residential and hospital-based treatment. Look in our menus tab for the services card for more information. </Text>

                <Text style = {styles.menuSubtitle}>Motivational quotes</Text>
                <Text style = {styles.quotes}>Addiction is an adaptation. It’s not you. It’s the cage you live in—Johann Hari.</Text>
                <Text style = {styles.quotes}>Become addicted to constant and never-ending self-improvement—Anthony J. D’Angelo.</Text>
                <Text style = {styles.quotes}>It’s going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure—Joseph Campbell</Text>
                <Text style = {styles.quotes}>Focus on where you want to go, not where you currently are—Unknown</Text>
                <Text style = {styles.quotes}>Heal the heart, don’t hide the pain—Melanie Koulouris</Text>
                <Text>{"\n\n\n"}</Text>

              </ScrollView>
            </View>
            <View style = {styles.menuTwo}>
              <ScrollView>
                <Text style = {styles.menuTitle}>Services</Text>
                <Text style = {styles.menuSubtitle}>Counseling and behavioral therapies</Text>
                <Text style = {styles.menuNormal}>Offer counseling therapies that include different forms of behavioral therapy. Behavioral therapy help treat mental health disorders such as the opioid disorder. The different types of behavioral therapy include cognitive behavioral therapy and aversion therapy.</Text>
                <Text style = {styles.menuSubtitle}>Cognitive behavioral therapy</Text>
                <Text style = {styles.menuNormal}>Combines therapy with cognitive therapy and treatment would be centered around the way that your thoughts and beliefs influence your actions and moods.  </Text>
                <Text style = {styles.menuSubtitle}>Aversion therapy</Text>
                <Text style = {styles.menuNormal}>To treat opioid addiction, aversion therapy will teach you to associate opioid with something that causes discomfort or an unpleasant memory in order for you to overcome the addiction of using opioid. </Text>
                <Text style = {styles.menuSubtitle}>Medication </Text>
                <Text style = {styles.menuNormal}>Have effective medications to treat opioid use disorder such as methadone, buprenorphine, and naltrexone. These medications could help you recover from opioid use disorder. </Text>
                <Text style = {styles.menuSubtitle}>Medication assisted therapy (MAT)</Text>
                <Text style = {styles.menuNormal}>Provide therapy that uses medications with counseling and behavioral therapies to treat opioid disorders and help sustain recovery. MAT is mostly used for the treatment of addiction to opioids and under federal law, MAT patients must receive counseling as well as medical, vocational, education, and other assessment and treatment services. </Text>
                <Text style = {styles.menuSubtitle}>Residential and hospital-based treatment</Text>
                <Text style = {styles.menuNormal}>Residential and hospital-based  treatment programs minister live-in treatment for addiction and mental health disorders. Services that are provided include withdrawal management, medication-assisted treatment, group therapy, individual therapy, and 12-step model recovery group. </Text>
                <Text>{"\n\n\n"}</Text>
                
              </ScrollView>
            </View>
            <View style = {styles.menuThree}>
              <ScrollView>
                <Text style = {styles.menuTitle}>Message other patients / doctors.</Text>
                <Text style = {styles.menuNormal}>This is a communication platform to connect from patients to providers. </Text>
                <Text style = {styles.menuSubtitle}>Crisis hotline</Text>
                <Text style = {styles.menuNormal}>SAMHSA’s National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and information service (in English and Spanish) for individuals and families facing mental and/or substance use disorders.</Text>
                <Text style = {styles.phone}> 1-800-662-HELP (4357) </Text>
                <Text>{"\n\n\n"}</Text>
              </ScrollView>
            </View>
            
          </ScrollView>
        </View>
      <LowerDashboard navigation = {this.props.navigation}/>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:"white",width:"100%",flexGrow:1,flex:1}}>
        <ScrollView>
          <Text style = {styles.welcome}>Welcome! Have a look around. </Text>
          <Text style = {styles.missionStatement}>Mission Statement: OC Opioid Care provides assistance to the Orange County community with services that are comprehensive, empathetic, and crucial to those suffering from opiate or substance use disorder.</Text>
          <Text style = {styles.welcome}>Common Myths and Facts</Text>
          <Text style = {styles.myth}>Myth #1: Opioid addiction is just a psychological disorder and people who are dependent simply need better willpower. </Text>
          <Text style = {styles.fact}>Fact: Opioid addiction is defined as loss of control over the use of opioid drugs. These patients typically develop tolerance and experience withdrawal when they stop using opioids. Long term use of opioids changes the brain’s reward system and alters brain function, and is not a psychological disorder.</Text>
          <Text style = {styles.myth}>Myth #2: The best way to combat an opioid addiction is without medication. </Text>
          <Text style = {styles.fact}>Fact: Going cold turkey to treat an addiction may seem like the more attractive option however, research shows that medication based treatments are the most effective treatment. Opioid use disorder is similar to other illnesses such as depression, diabetes, or even hypertension--where they all are effectively treated with a combination of medication and counseling. Medications commonly used include buprenorphine and methadone which block the reward or “high” that users get from opiates. They help balance brain function and can relieve withdrawal symptoms. </Text>
          <Text style = {styles.myth}>Myth #3: It’s ok if we call people with opioid use disorder “addicts,” “users,” or “junkies.” </Text>
          <Text style = {styles.fact}>Fact: These negative labels create a stigma on those who suffer from opiate use disorder, and act as a barrier from accessing effective treatments. These terms can lead to overdose, and those who were referred to as having “substance use disorders” were more likely to be seen. A person is not defined by their disease.</Text>
          <Text>{"\n\n\n\n\n"}</Text>
        </ScrollView>
        <LowerDashboard navigation = {this.props.navigation}/>
      </View>
    );
  }
}

class CareScreen extends React.Component {
  render() {
    return (
      <View style={{width:"100%",flexGrow:1,flex:1}}>
        
        <MapView
          provider={PROVIDER_GOOGLE}
          style ={{height: '100%', width:'100%'}} 
          initialRegion={{
            latitude: 33.684566,
            longitude: -117.826508,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        > 
        {markersList.map((m)=>
          <Marker
            key = {m.key}
            coordinate = {m.coordinate}
            title = {m.title}
            onCalloutPress ={()=>
              this.props.navigation.navigate('Info',{
                title: m.title,
                phoneNumber:m.phoneNumber,
                description:m.description,
                addressState:m.addressStreet,
                addressState:m.addressState,
                addressCity:m.addressCity,
                addressZip:m.addressZip,
                insurances:m.insurances,
              })}>
            <Image source = {require('./assets/med_icon.png')} style = {{height: 40, width:40}}/>
          </Marker>
        )}  
        </MapView>
        <LowerDashboard navigation = {this.props.navigation}/>
      </View>
    );
  }
}

class InfoScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:"white",width:"100%",flexGrow:1,flex:1}}>
        <ScrollView>
          <Text style = {styles.menuTitle}>{this.props.navigation.getParam("title","Default")}</Text>
          <Text style = {styles.phone}>{this.props.navigation.getParam("phoneNumber","Default")}</Text>
          <Text style = {styles.address}>{this.props.navigation.getParam("addressStreet","Default")}</Text>
          <Text style = {styles.address}>{this.props.navigation.getParam("addressCity","Default")}</Text>
          <Text style = {styles.address}>{this.props.navigation.getParam("addressState","Default")}</Text>
          <Text style = {styles.menuSubtitle}>Insurances</Text>
          <Text style = {styles.menuNormal}>{this.props.navigation.getParam("insurances","Default").map(x=>(x+"\n"))}</Text>
          <Text>{"\n\n\n"}</Text>
        </ScrollView>
        <LowerDashboard navigation = {this.props.navigation}/>
      </View>
    );
  }
}
class LowerDashboard extends React.Component{
  render() {
    return (
      <View style={styles.lowerDash}>
        <View style = {{flex:2}} >
          <Button  title = "Menu" onPress={()=> this.props.navigation.navigate('Menu')}/>
        </View>
        <View style = {{flex:2}} >
          <Button title = "Home" onPress={()=> this.props.navigation.navigate('Home')}/>
        </View>
        <View style = {{flex:2}} >
          <Button style = {{flex:2,width:50,height:50}} title = "Care" onPress={()=> this.props.navigation.navigate('Care')}/>
        </View>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Menu: {
    screen: MenuScreen,
  },
  Care: {
    screen: CareScreen,
  },
  Info: {
    screen: InfoScreen,
  },
  
});

export default createAppContainer(AppNavigator);