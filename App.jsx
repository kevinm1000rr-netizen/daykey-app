import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---- Local storage helpers ----
const load = (k, f) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch { return f; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

// ---- Types (lightweight) ----
// A "DayLog" is what we persist for streaks & calendar
// { date, outcome, tasks:[{text,done}], moodAM, moodPM, focus, gratitude, note, completedAt }

export default function DayKeyV2() {
  const [mode, setMode] = useState("am");
  const [accent, setAccent] = useState(load("dk_accent", "blue"));
  const [dark, setDark] = useState(load("dk_dark", false));
  const [outcome, setOutcome] = useState(load("dk_outcome", ""));
  const [tasks, setTasks] = useState(load("dk_tasks", [
    { id: 1, text: "", done: false },
    { id: 2, text: "", done: false },
    { id: 3, text: "", done: false },
  ]));
  const [moodAM, setMoodAM] = useState(load("dk_moodAM", "🙂"));
  const [moodPM, setMoodPM] = useState(load("dk_moodPM", "🙂"));
  const [focus, setFocus] = useState(load("dk_focus", "Deep work (2h)"));
  const [gratitude, setGratitude] = useState(load("dk_gratitude", ""));
  const [note, setNote] = useState(load("dk_note", ""));
  const [history, setHistory] = useState(load("dk_history", []));

  useEffect(() => { save("dk_outcome", outcome); }, [outcome]);
  useEffect(() => { save("dk_tasks", tasks); }, [tasks]);
  useEffect(() => { save("dk_moodAM", moodAM); }, [moodAM]);
  useEffect(() => { save("dk_moodPM", moodPM); }, [moodPM]);
  useEffect(() => { save("dk_focus", focus); }, [focus]);
  useEffect(() => { save("dk_gratitude", gratitude); }, [gratitude]);
  useEffect(() => { save("dk_note", note); }, [note]);
  useEffect(() => { save("dk_history", history); }, [history]);
  useEffect(() => { save("dk_accent", accent); }, [accent]);
  useEffect(() => { save("dk_dark", dark); }, [dark]);

  return <div className="p-6 text-center text-xl">🔑 DayKey loaded.</div>
}