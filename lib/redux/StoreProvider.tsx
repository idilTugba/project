"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import { AppStore, Store } from "@/lib/redux/Store";

const persistor = persistStore(Store);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
}
