import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. 상단 헤더 영역 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>앱 타이틀</Text>
      </View>

      {/* 2. 메인 스크롤 콘텐츠 영역 */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>안녕하세요!</Text>

        {/* 피그마에서 만든 카드/박스 요소 예시 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>메인 콘텐츠 카드</Text>
          <Text style={styles.cardDescription}>
            피그마에서 디자인한 내용을 여기에 구성합니다.
          </Text>
        </View>

        {/* 피그마에서 만든 버튼 요소 예시 */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>주요 버튼</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// 3. 피그마에서 추출한 수치를 넣는 스타일시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // 피그마 전체 배경색
  },
  header: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
  },
  content: {
    padding: 20, // 피그마 좌우/상하 여백
    gap: 16, // 요소 간 간격
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222222",
  },
  card: {
    backgroundColor: "#F8F9FA", // 피그마 카드 배경색
    borderRadius: 12, // 모서리 둥글기
    padding: 16,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666666",
  },
  button: {
    backgroundColor: "#007AFF", // 피그마 버튼 색상
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
