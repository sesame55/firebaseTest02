import React from 'react';

// 格線系統
import { Grid } from 'semantic-ui-react';

// 元件
import Topics from '../components/Topics';

let Posts = () => {
  return (
    <Grid>
      {/* Row = 橫向 ，自動切16等分*/}
      <Grid.Row>
        {/* Column = 直向 ，width 可以指定要占幾等分*/}
        <Grid.Column width={3}>
          <Topics />
        </Grid.Column>
        <Grid.Column width={10}>貼文列表</Grid.Column>
        <Grid.Column width={3}>空白</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Posts;
