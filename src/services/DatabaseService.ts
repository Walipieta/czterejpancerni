import { db } from "@/firebase";
import Task from "@/models/Task"
import { collection, addDoc, getDocs } from "firebase/firestore";

export abstract class DatabaseService {
  static async addDocument(data: object): Promise<string | undefined> {
    try {
      const docRef = await addDoc(collection(db, "tasks2"), data);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return undefined;
    }
  }
  static async readTasks(): Promise<Task[]> {
    const querySnapshot = await getDocs(collection(db, "tasks2"));
    const tasks: Task[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<Task, "id">;
        const task: Task = {
            id: doc.id,
            ...data
        }
        tasks.push(task);
    });
    return tasks;
  }


  static async remoteTask(id: string) {
    // Delete documents
    // https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents
  }

  static async replaceTask(id: string, data: Task) {
    // Update a document
    // https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
  }

}