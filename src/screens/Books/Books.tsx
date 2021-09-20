import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';

const ListItem = ({
  id,
  title,
  bookCovers,
}: {
  id: number;
  title: string;
  bookCovers: Array<Cover>;
}) => (
  <TouchableOpacity
    onPress={() => goToScreen('BookDetails', { id, title })}
    style={styles.listItemContainerShadow}
  >
    <View style={styles.listItemContainer}>
      <View style={{ width: '100%' }}>
        <Image resizeMode="cover" source={{ uri: bookCovers[0].URL }} style={styles.image} />
      </View>
      <Separator size={10} />
      <Typography numberOfLines={2} align="center">
        {title}
      </Typography>
      <Separator size={10} />
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} bookCovers={item.book_covers} />
);

const BooksScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="HP" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  if (errorOccurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.backgroundContainer}>
          <Image style={styles.backdrop} resizeMode="cover" source={require('../../assets/images/header.png')} />
        </View>
        <View style={styles.overlay}>
          <Image style={styles.logo} source={require('../../assets/images/headertitle.png')} />
        </View>
      </View>
      <View style={styles.mainContainer}>
        {/* <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} /> */}
        <Typography color={colors.brown} align="center" size={30} variant="bold">
          BOOKS
        </Typography>
        <Separator size={20} />
        <FlatList
          numColumns={2}
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={toggleRefreshFlag}
          data={books}
          renderItem={renderFlatlistItem}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistContent}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default BooksScreen;
