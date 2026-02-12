import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

export default function CrearMetaHidratacion() {
  const [nombreReto, setNombreReto] = useState('');
  const [metaDiaria, setMetaDiaria] = useState(4);
  const [duracionSeleccionada, setDuracionSeleccionada] = useState('3d');

  const duracionOpciones = ['3d', '7d', '14d', '21d', '30d'];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#00AC83" />
        <ScrollView className={styles.scrollView}>
          {/* Header */}
          <View className={styles.header}>
            {/* Title Header */}
            <View className={styles.titleContainer}>
              <Image
                source={{
                  uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1q9AuXz97u/iqxydh6z_expires_30_days.png',
                }}
                resizeMode="stretch"
                className={styles.backIcon}
              />
              <Text className={styles.titleText}>Crear Meta</Text>
            </View>

            {/* Progress Indicators */}
            <View className={styles.progressContainer}>
              <View className={styles.progressBar} />
              <View className={styles.progressBar} />
              <View className={styles.progressBar} />
            </View>
          </View>

          {/* Content */}
          <View className={styles.content}>
            {/* Define tu meta section */}
            <View className={styles.defineMetaSection}>
              <Text className={styles.defineMetaTitle}>Define tu meta</Text>
              <Text className={styles.defineMetaSubtitle}>
                Establece un objetivo alcanzable
              </Text>
            </View>

            {/* Hydration Card */}
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={['#00B8DB', '#008DA7']}
              className={styles.hydrationCard}>
              <View className={styles.hydrationContent}>
                <Image
                  source={{
                    uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1q9AuXz97u/jspyi5ts_expires_30_days.png',
                  }}
                  resizeMode="stretch"
                  className={styles.dropletIcon}
                />
                <View className={styles.hydrationTextContainer}>
                  <Text className={styles.hydrationTitle}>Hidratación</Text>
                  <Text className={styles.hydrationSubtitle}>4 vasos durante 3 días</Text>
                </View>
              </View>
            </LinearGradient>

            {/* Nombre del reto */}
            <View className={styles.inputSection}>
              <Text className={styles.inputLabel}>Nombre del reto</Text>
              <TextInput
                value={nombreReto}
                onChangeText={setNombreReto}
                placeholder="Nombre"
                placeholderTextColor="#BDBDBD"
                className={styles.textInput}
              />
            </View>

            {/* Meta diaria */}
            <View className={styles.metaDiariaSection}>
              <View className={styles.metaDiariaLabelRow}>
                <Text className={styles.inputLabel}>Meta diaria</Text>
                <View className={styles.vasosBadge}>
                  <Text className={styles.vasosBadgeText}>{metaDiaria} vasos</Text>
                </View>
              </View>

              {/* Slider visual */}
              <View className={styles.sliderContainer}>
                <View className={styles.sliderTrack}>
                  <View className={styles.sliderFill} />
                </View>
                <Text className={styles.sliderValue}>12</Text>
              </View>
            </View>

            {/* Duración del reto */}
            <View className={styles.duracionSection}>
              <View className={styles.duracionLabelRow}>
                <Text className={styles.inputLabel}>Duración del reto</Text>
                <View className={styles.duracionBadge}>
                  <Text className={styles.duracionBadgeText}>3 días</Text>
                </View>
              </View>

              {/* Duration Options */}
              <View className={styles.duracionOptions}>
                {duracionOpciones.map((opcion, index) => (
                  <TouchableOpacity
                    key={opcion}
                    onPress={() => setDuracionSeleccionada(opcion)}
                    className={`${styles.duracionButton} ${
                      duracionSeleccionada === opcion
                        ? styles.duracionButtonActive
                        : styles.duracionButtonInactive
                    } ${index === 0 ? styles.duracionButtonFirst : ''}`}>
                    <Text
                      className={
                        duracionSeleccionada === opcion
                          ? styles.duracionButtonTextActive
                          : styles.duracionButtonTextInactive
                      }>
                      {opcion}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Continuar Button */}
            <TouchableOpacity className={styles.continuarButton}>
              <Text className={styles.continuarButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

// Estilos separados usando NativeWind
const styles = {
  container: 'flex-1 bg-white',
  scrollView: 'flex-1 bg-white',

  // Header styles
  header: 'bg-[#00AC83] pb-6 mb-9',
  titleContainer: 'flex-row items-center py-4 px-5',
  backIcon: 'w-5 h-[15px] mr-3',
  titleText: 'text-white text-base',

  progressContainer: 'flex-row items-center mx-6 gap-5',
  progressBar: 'h-[11px] flex-1 bg-white rounded-[10px]',

  // Content styles
  content: 'flex-1',

  defineMetaSection: 'px-5 mb-4',
  defineMetaTitle: 'text-[#262C3D] text-lg font-medium mb-1',
  defineMetaSubtitle: 'text-[#747F9E] text-sm',

  // Hydration card
  hydrationCard: 'rounded-xl py-4 px-6 mb-6 mx-3',
  hydrationContent: 'flex-col items-center justify-center',
  dropletIcon: 'w-[55px] h-[79px] mb-3',
  hydrationTextContainer: 'items-center',
  hydrationTitle: 'text-white text-base font-bold mb-2 text-center',
  hydrationSubtitle: 'text-white text-sm text-center',

  // Input section
  inputSection: 'mb-5 px-5',
  inputLabel: 'text-[#262C3D] text-base font-semibold mb-2',
  textInput:
    'bg-white border border-[#E0E0E0] rounded-xl px-4 py-4 text-[#262C3D] text-base',

  // Meta diaria section
  metaDiariaSection: 'mb-6 px-5',
  metaDiariaLabelRow: 'flex-row items-center justify-between mb-4',
  vasosBadge: 'bg-[#00AC83] rounded-full px-4 py-1.5',
  vasosBadgeText: 'text-white text-sm font-semibold',

  sliderContainer: 'flex-row items-center gap-3 mt-2',
  sliderTrack: 'flex-1 h-1.5 bg-[#E0E0E0] rounded-full',
  sliderFill: 'w-1/3 h-full bg-[#00AC83] rounded-full',
  sliderValue: 'text-[#747F9E] text-base font-medium min-w-[24px] text-right',

  // Duración section
  duracionSection: 'mb-8 px-5',
  duracionLabelRow: 'flex-row items-center justify-between mb-4',
  duracionBadge: 'bg-[#00AC83] rounded-full px-4 py-1.5',
  duracionBadgeText: 'text-white text-sm font-semibold',

  duracionOptions: 'flex-row flex-wrap gap-3',
  duracionButton: 'border-2 border-[#E0E0E0] rounded-full px-7 py-3',
  duracionButtonFirst: '',
  duracionButtonActive: 'bg-[#00AC83] border-[#00AC83]',
  duracionButtonInactive: 'bg-white border-[#E0E0E0]',
  duracionButtonTextActive: 'text-white text-base font-semibold',
  duracionButtonTextInactive: 'text-[#262C3D] text-base',

  // Continuar button
  continuarButton: 'bg-[#00AC83] rounded-full py-4 mx-5 mb-8',
  continuarButtonText: 'text-white text-lg font-bold text-center',
};
