// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function Icon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string; size: number; }) {
    return <Ionicons style={{ marginBottom: -3 }} {...props} />;
  }
  