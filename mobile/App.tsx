/**
 * WitnessGuard Mobile Application Entry Point
 */
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

// Import shared types to verify workspace linking works
import { SHARED_VERSION } from '@witness-guard/shared';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.content}>
        <Text style={styles.title}>WitnessGuard</Text>
        <Text style={styles.subtitle}>
          Evidence that cannot be deleted, confiscated, or suppressed.
        </Text>
        <Text style={styles.version}>
          Shared Package v{SHARED_VERSION}
        </Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            🚧 MVP In Development
          </Text>
          <Text style={styles.featureList}>
            Coming soon:{'\n'}
            • Video Recording{'\n'}
            • Audio Recording{'\n'}
            • Snapshot Capture{'\n'}
            • Quick Notes{'\n'}
            • Tagging System{'\n'}
            • Panic Button
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#eaeaea',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#a0a0a0',
    textAlign: 'center',
    marginBottom: 24,
    fontStyle: 'italic',
  },
  version: {
    fontSize: 12,
    color: '#666',
    marginBottom: 32,
  },
  placeholder: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  placeholderText: {
    fontSize: 18,
    color: '#e94560',
    marginBottom: 16,
  },
  featureList: {
    fontSize: 14,
    color: '#a0a0a0',
    lineHeight: 24,
  },
});

export default App;
