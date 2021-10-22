import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";
import { watchEffect } from "@vue/runtime-core";

const getCollection = (collection) => {
	const documents = ref(null);
	const error = ref(null);

	let collectionRef = projectFirestore
		.collection(collection)
		.orderBy("createdAt");

	const unsub = collectionRef.onSnapshot(
		(snap) => {
			console.log("snapshot");
			let results = [];
			snap.docs.forEach((doc) => {
				doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
			});
			documents.value = results;
			error.value = null;
		},
		(err) => {
			console.log(err.message);
			documents.value = null;
			error.value = "could not fetch data";
		},
	);

	watchEffect((onInvalidate) => {
		// unsub from prev collection when watcher is stopped (component unmounted)
		onInvalidate(() => unsub());
	});

	return { error, documents };
};

export default getCollection;
