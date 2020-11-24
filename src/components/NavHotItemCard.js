import React, { PureComponent } from 'react';
import {
  Grid,
  Box,
  Link,
} from '@material-ui/core';

class NavHotItemCard extends PureComponent {

  getSkeletonList = (length = 8) => {
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push(i);
    }
    return list;
  }

  render() {
    const { navList, tagList } = this.props;
    if (!(tagList || []).length) return null;
    if (!(navList || []).length) {
      let skeletonList = this.getSkeletonList();
      return (
        <Box mb={2} id={encodeURI((tagList[0] || {}).tag_en)}>
          <Grid container spacing={2}>
            {
              (skeletonList).map((key, index) => (
                <Grid item xs={6} sm={4} md={3} key={`${key}-${index}`}>
                  <Box
                    bgcolor="white"
                    borderRadius={8}
                    className="skeletonHotCard"
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      )
    }
    console.log('NavHotItemCard');
    return (
      <Box mb={2} id={encodeURI((tagList[0] || {}).tag_en)}>
        <Grid container spacing={2}>
          {
            (navList || [])
              .filter(item => (item.tag_en || '').indexOf('Hot') > -1)
              .map((item, index) => (
                <Grid item xs={6} sm={4} md={3} key={`Hot-${index}`}>
                  <Link
                    color="textPrimary"
                    href={`${item.website}?utm_resource=eth123.org`}
                    target="_blank"
                    underline='none'>
                    <Box
                      bgcolor="white"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      className="hotCard"
                      px={2}
                      borderRadius={8}
                    >
                      <img
                        src={item.image}
                        alt=""
                      />
                    </Box>
                  </Link>
                </Grid>
              ))
          }
        </Grid>
      </Box>
    );
  }

}

export default NavHotItemCard;
