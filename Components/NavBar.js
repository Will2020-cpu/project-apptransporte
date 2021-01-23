import React, { Fragment } from 'react';
import { Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' pack="eva"/>
);


const MenuIcon = (props) =>(
    <Icon {...props} name="bars" pack="fontawesome"/>
)



export const Header = ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor
    const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
    return (
        <Fragment>
           <Layout level="1" style={{marginTop:20}}>
           {
                previous ? (
                    <TopNavigation
                        accessoryLeft={() => <TopNavigationAction onPress={navigation.pop} icon={BackIcon} />}
                        title={title}
                    />
                ) : (
                    <TopNavigation
                        alignment="center"
                        accessoryLeft={()=> <TopNavigationAction onPress={()=>navigation.openDrawer()} icon={MenuIcon}/>}
                        title={title}
                    />
                )
            }
           </Layout>
        </Fragment>
    )
}